(function () {
  "use strict";

  const els = {
    timer: document.getElementById("timer"),
    btnStart: document.getElementById("btn-start"),
    btnStop: document.getElementById("btn-stop"),
    btnReset: document.getElementById("btn-reset"),
    results: document.getElementById("results"),
    flowNote: document.getElementById("flow-note"),
    summaryDuration: document.getElementById("summary-duration"),
    summaryLiters: document.getElementById("summary-liters"),
    ideaList: document.getElementById("idea-list"),
    loadError: document.getElementById("load-error"),
  };

  /** @type {{ showerFlowLitersPerMinute: number, flowNote?: string, ideas: Array<{ litersPerUnit: number, singular: string, plural: string }> } | null} */
  let config = null;

  /** Wall-clock start of the current running segment */
  let runStartAt = null;
  /** Accumulated time when not running */
  let storedMs = 0;
  let running = false;
  let rafId = null;

  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  function formatHMS(totalMs) {
    const s = Math.floor(totalMs / 1000);
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${pad2(h)}:${pad2(m)}:${pad2(sec)}`;
  }

  function formatDurationHuman(totalMs) {
    const s = Math.floor(totalMs / 1000);
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    const parts = [];
    if (h > 0) parts.push(`${h} h`);
    if (m > 0) parts.push(`${m} min`);
    if (sec > 0 || parts.length === 0) parts.push(`${sec} s`);
    return parts.join(" ");
  }

  function litersUsed(totalMs, litersPerMinute) {
    const minutes = totalMs / 60000;
    return minutes * litersPerMinute;
  }

  function currentElapsedMs() {
    if (running && runStartAt != null) return storedMs + (Date.now() - runStartAt);
    return storedMs;
  }

  function renderTimer() {
    els.timer.textContent = formatHMS(currentElapsedMs());
    if (running) {
      rafId = requestAnimationFrame(renderTimer);
    }
  }

  function tickLoop() {
    if (rafId != null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    if (running) {
      renderTimer();
    }
  }

  function setButtonsState() {
    els.btnStart.disabled = running;
    els.btnStop.disabled = !running;
    els.btnReset.disabled = running;
  }

  function showError(msg) {
    els.loadError.textContent = msg;
    els.loadError.classList.add("is-visible");
  }

  function clearError() {
    els.loadError.textContent = "";
    els.loadError.classList.remove("is-visible");
  }

  function replaceN(template, n) {
    return template.replace(/\{\{n\}\}/g, String(n));
  }

  function buildIdeasList(totalLiters, ideas) {
    els.ideaList.innerHTML = "";
    if (!ideas || ideas.length === 0) return;

    for (const item of ideas) {
      const per = Number(item.litersPerUnit);
      if (!per || per <= 0) continue;

      const n = Math.floor(totalLiters / per);
      let text;
      if (n < 1) continue;
      if (n === 1) {
        text = item.singular;
      } else {
        text = replaceN(item.plural, n);
      }

      const li = document.createElement("li");
      const mainRow = document.createElement("div");
      mainRow.className = "idea-main";
      mainRow.textContent = text;
      li.appendChild(mainRow);

      const details = item.details;
      if (Array.isArray(details) && details.length > 0) {
        const sub = document.createElement("ul");
        sub.className = "idea-sublist";
        for (let i = 0; i < details.length; i++) {
          const subLi = document.createElement("li");
          subLi.textContent = replaceN(details[i], n);
          sub.appendChild(subLi);
        }
        li.appendChild(sub);
      }

      els.ideaList.appendChild(li);
    }

    if (els.ideaList.children.length === 0) {
      const li = document.createElement("li");
      li.textContent =
        "The run was very short—try a longer shower timer, or lower some «litersPerUnit» values in js/alternatives-data.js for more comparisons.";
      els.ideaList.appendChild(li);
    }
  }

  function showResultsFromElapsed(ms) {
    if (!config) return;
    const flow = config.showerFlowLitersPerMinute;
    const L = litersUsed(ms, flow);

    els.flowNote.textContent = config.flowNote || "";
    els.summaryDuration.textContent = formatDurationHuman(ms);
    els.summaryLiters.textContent =
      L >= 100 ? `${L.toFixed(1)} L` : L >= 1 ? `${L.toFixed(2)} L` : `${(L * 1000).toFixed(0)} ml (≈${L.toFixed(3)} L)`;

    buildIdeasList(L, config.ideas);
    els.results.classList.add("is-visible");
  }

  function hideResults() {
    els.results.classList.remove("is-visible");
  }

  function onStart() {
    if (running) return;
    clearError();
    storedMs = 0;
    runStartAt = Date.now();
    running = true;
    hideResults();
    setButtonsState();
    tickLoop();
  }

  function onStop() {
    if (!running || runStartAt == null) return;
    storedMs += Date.now() - runStartAt;
    runStartAt = null;
    running = false;
    if (rafId != null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    els.timer.textContent = formatHMS(storedMs);
    setButtonsState();

    if (storedMs <= 0) {
      hideResults();
      return;
    }
    showResultsFromElapsed(storedMs);
  }

  function onReset() {
    if (running) return;
    if (rafId != null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    storedMs = 0;
    runStartAt = null;
    els.timer.textContent = "00:00:00";
    hideResults();
    clearError();
    setButtonsState();
  }

  function initConfig() {
    const data = typeof window !== "undefined" ? window.SHOWER_ALTERNATIVES : null;
    if (!data || typeof data.showerFlowLitersPerMinute !== "number" || !Array.isArray(data.ideas)) {
      config = null;
      showError(
        "Comparison data not found. In index.html, load js/alternatives-data.js before js/app.js."
      );
      els.btnStart.disabled = true;
      els.btnStop.disabled = true;
      return;
    }
    config = data;
    clearError();
  }

  els.btnStart.addEventListener("click", onStart);
  els.btnStop.addEventListener("click", onStop);
  els.btnReset.addEventListener("click", onReset);

  initConfig();
  setButtonsState();
})();

