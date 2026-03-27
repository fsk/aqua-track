/**
 * Karşılaştırma metinleri ve akış tahmini — düzenlemek için bu dosyayı değiştirin.
 * GitHub Pages: yalnızca statik dosya; sunucu veya derleme gerekmez.
 */
(function (global) {
  "use strict";

  global.SHOWER_ALTERNATIVES = {
    showerFlowLitersPerMinute: 10,
    flowNote:
      "Tahmini akış: dakikada ~10 litre (ortalama duş başlığı). Gerçek tüketim başlığa ve su basıncına göre değişir.",
    ideas: [
      {
        litersPerUnit: 0.2,
        singular: "Yaklaşık 1 bardak içme suyu (200 ml)",
        plural: "Yaklaşık {{n}} bardak içme suyu (200 ml)",
      },
      {
        litersPerUnit: 2,
        singular: "1 kişinin yaklaşık 1 günlük içme suyu ihtiyacı kadar",
        plural: "Yaklaşık {{n}} kişinin 1 günlük içme suyu ihtiyacı kadar",
      },
      {
        litersPerUnit: 5,
        singular: "Ortalama bir bulaşık makinesi yıkama döngüsü için harcanan suya eşdeğer",
        plural: "Yaklaşık {{n}} bulaşık makinesi yıkama döngüsü kadar su",
      },
      {
        litersPerUnit: 40,
        singular: "Tam dolu bir çamaşır makinesi yükü için gereken suya yakın",
        plural: "Yaklaşık {{n}} tam çamaşır makinesi yükü kadar su",
      },
      {
        litersPerUnit: 100,
        singular: "Küçük bir bahçe veya birkaç saksının ciddi sulaması için yeterli olabilecek miktar",
        plural: "Yaklaşık {{n}} yüz litrelik «ev içi sulama / küçük bahçe» ölçeğinde kullanım",
      },
      {
        litersPerUnit: 150,
        singular: "Elle yıkamada ortalama bir araç yıkamada harcanan suya benzeyen miktar",
        plural: "Yaklaşık {{n}} araç yıkaması kadar su (ortalama tahmin)",
      },
    ],
  };
})(typeof window !== "undefined" ? window : globalThis);
