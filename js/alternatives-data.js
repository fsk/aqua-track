/**
 * Comparison copy and flow-rate assumption — edit this file to customize.
 * Each idea may include `details`: 4–5 short facts shown under the main line.
 * Static-only: works on GitHub Pages with no build or server.
 */
(function (global) {
  "use strict";

  global.SHOWER_ALTERNATIVES = {
    showerFlowLitersPerMinute: 10,
    flowNote:
      "Estimated flow: ~10 liters per minute (typical showerhead). Actual use varies with the fixture and water pressure.",
    ideas: [
      {
        litersPerUnit: 0.2,
        singular: "Roughly one glass of drinking water (200 ml)",
        plural: "Roughly {{n}} glasses of drinking water (200 ml each)",
        details: [
          "200 ml is a common serving size when people track “glasses per day.”",
          "Spreading intake across the day is easier on the body than chugging rarely.",
          "Carrying a measured glass or bottle helps reduce wasted half-drinks.",
          "In emergencies, every small volume of clean water matters for survival kits.",
          "Heating water for tea or coffee still “spends” the same volume—which matters in dry regions.",
        ],
      },
      {
        litersPerUnit: 0.5,
        singular: "About one typical small bottle of water (500 ml)",
        plural: "About {{n}} half-liter bottles of water",
        details: [
          "500 ml retail bottles are a global baseline for single-serve hydration.",
          "Refilling from the tap (where safe) avoids plastic waste from those bottles.",
          "The energy cost of bottling and shipping often exceeds the water itself.",
          "A sealed half-liter is easy to budget when rationing on hikes or outages.",
          "Comparing shower liters to bottles makes big numbers feel concrete.",
        ],
      },
      {
        litersPerUnit: 1,
        singular: "Enough to fill a medium kettle for one boil",
        plural: "Enough for about {{n}} kettle boils (≈1 L each)",
        details: [
          "Electric kettles are among the most efficient ways to heat drinking water.",
          "Boiling only what you need saves both water and electricity.",
          "Scale buildup from hard water still wastes heat—periodic descaling helps.",
          "Some rice and oat recipes start from about one liter pre-measured.",
          "That same liter lost down the drain in a leak is gone instantly—kettle use feels deliberate.",
        ],
      },
      {
        litersPerUnit: 1.5,
        singular: "About one large reusable bottle or big retail sports-drink size (≈1.5 L)",
        plural: "About {{n}} large ~1.5 L bottles filled",
        details: [
          "Big bottles are popular with athletes and shift workers on long days.",
          "A labeled bottle helps people notice how often they actually refill.",
          "Sugary drinks in that size pack calories unrelated to hydration need.",
          "Washing the bottle occasionally uses a little extra water—worth remembering.",
          "1.5 L sits between “snack sip” and “jug for the whole desk.”",
        ],
      },
      {
        litersPerUnit: 2,
        singular: "About one person’s approximate daily drinking-water needs",
        plural: "About {{n}} people’s approximate daily drinking-water needs",
        details: [
          "Needs vary by climate, activity, age, and health—2 L is only a rough anchor.",
          "Much of daily water also comes from food like fruit and soup.",
          "Over-drinking without medical cause is rarely necessary for healthy adults.",
          "Kids and elders may need reminders, not bigger bottles, in hot weather.",
          "Safe municipal water is still a privilege billions lack every day.",
        ],
      },
      {
        litersPerUnit: 3,
        singular: "Similar to a large pot of water for cooking pasta or soup",
        plural: "About {{n}} large cooking pots’ worth of water",
        details: [
          "Pasta water is often salted after it boils—start coverage matters.",
          "Lids and right-sized pots reduce evaporative losses while heating.",
          "Starchy water can be reused to loosen sauces if hygiene allows.",
          "Pressure cookers can cut the starting volume for some recipes.",
          "Letting a tap run to “waiting for hot” can exceed one pot’s volume fast.",
        ],
      },
      {
        litersPerUnit: 4,
        singular: "Similar to a big stockpot for stew, broth, or canning prep",
        plural: "About {{n}} very large stockpots’ worth of water",
        details: [
          "Bone broths simmer for hours—evaporation means topping up sometimes.",
          "Canning needs sterile jars and enough boil depth for safety rules.",
          "Outdoor propane burners speed big batches but don’t change the liter count.",
          "Cooling broth before fridge storage still “uses” the original volume.",
          "Meal-prepping once can save repeated smaller boils later in the week.",
        ],
      },
      {
        litersPerUnit: 5,
        singular: "Similar to what an average dishwasher cycle can use",
        plural: "About {{n}} dishwasher cycles’ worth of water",
        details: [
          "Full loads almost always beat hand-washing the same stack for water use.",
          "Eco programs trade time for lower spray volumes.",
          "Scraping plates first reduces filter clogs and repeat washes.",
          "Older machines may exceed these averages—maintenance matters.",
          "Heated dry cycles cost energy, not usually extra wash water.",
        ],
      },
      {
        litersPerUnit: 6,
        singular: "In the range of one older single-flush toilet flush",
        plural: "About {{n}} single-flush toilet flushes (older fixtures)",
        details: [
          "Dual-flush and high-efficiency models often cut this to a few liters.",
          "Leaky flapper valves can waste multiples of one flush per day silently.",
          "“If it’s yellow…” campaigns highlight culture, not always plumbing limits.",
          "Retrofit tanks with displacement devices help on legacy bathrooms.",
          "Comparing flushes to showers shows both add up on the water bill.",
        ],
      },
      {
        litersPerUnit: 8,
        singular: "Roughly what you can waste by leaving the tap on while brushing your teeth (rough guess)",
        plural: "About {{n}} times that “tap on while brushing” mistake",
        details: [
          "Aerators reduce flow but don’t help if the valve stays fully open.",
          "Two minutes brushed twice daily doubles the mistake potential.",
          "Kids mimic adults—model turning the tap off between rinses.",
          "Some faucets exceed 8 L/min—your fixture label may surprise you.",
          "Behavior change here is free once the habit sticks.",
        ],
      },
      {
        litersPerUnit: 10,
        singular: "About one minute of a garden hose on medium flow (very rough)",
        plural: "About {{n}} minutes of garden hose use (medium flow, rough)",
        details: [
          "Hose diameters and pressure swing the liters-per-minute a lot.",
          "Trigger nozzles stop the flow between spots instantly.",
          "Morning watering loses less to sun and wind than midday.",
          "Soaker hoses target roots with less overspray than jet spray.",
          "This app’s shower default is also ~10 L/min—easy mental math.",
        ],
      },
      {
        litersPerUnit: 12,
        singular: "In the ballpark of one full mop bucket for washing hard floors at home",
        plural: "About {{n}} mop-bucket fills for floor cleaning",
        details: [
          "Dirty water mid-job is normal—some homes refill more than once.",
          "Microfiber mops can clean longer before the bucket looks spent.",
          "Warm water lifts grease better but costs energy to heat.",
          "Outdoor entry mats cut how often floors need a deep mop.",
          "Pouring spent bucket water onto plants only works if soaps are safe.",
        ],
      },
      {
        litersPerUnit: 15,
        singular: "Close to a quick bucket-and-sponge wash of a small car using one filled bucket",
        plural: "About {{n}} bucket-and-sponge washes of a small car (one bucket each)",
        details: [
          "Commercial washes sometimes recycle rinse water—driveway washes rarely do.",
          "Washing on lawn can filter soaps if products are labeled yard-safe—verify first.",
          "Rinsing with an open hose can blow past 15 L in seconds.",
          "Two-bucket methods (wash + rinse) use more volume but reduce paint swirls.",
          "Electric vehicles still get dirty from road grime—size matters less than habit.",
        ],
      },
      {
        litersPerUnit: 19,
        singular: "Close to one large office water-cooler jug (≈5 US gallons / 19 L)",
        plural: "About {{n}} large cooler jugs of that size",
        details: [
          "Delivery trucks for jugs have a carbon footprint beyond the water itself.",
          "Bottle deposits and recycling rules vary by city.",
          "Cooler spills in offices waste liters nobody tracks on timesheets.",
          "Point-of-use filters can replace jugs where plumbing allows.",
          "Emergency planners often cite ~4 L per person per day as a strict minimum—not comfort.",
        ],
      },
      {
        litersPerUnit: 25,
        singular: "Enough to top up a shallow bath or soak several large laundry items by hand",
        plural: "About {{n}} shallow bath–scale soak sessions (rough)",
        details: [
          "Soaking helps loosen stains before gentler wash cycles.",
          "Thermostatic mixing valves keep Comfort from guessing scald risk.",
          "Wool and delicates often need temperature-stable basins.",
          "Reusing soak water for multiple similar items can stretch the volume ethically.",
          "Shallow baths can still exceed efficient shower times if taps drip.",
        ],
      },
      {
        litersPerUnit: 40,
        singular: "Close to a full load in a washing machine",
        plural: "About {{n}} full washing-machine loads’ worth of water",
        details: [
          "Front-loaders usually beat top-loaders on water per kilogram of laundry.",
          "Overloading reduces cleaning and can trigger extra rinse cycles.",
          "Choosing the right soil level avoids phantom re-washes.",
          "Cold washes save energy; some stains still need warmer targeted pretreat.",
          "Line drying saves dryer energy even when wash water is fixed.",
        ],
      },
      {
        litersPerUnit: 50,
        singular: "Similar to a shallow fill of a small kids’ paddling or splash pool",
        plural: "About {{n}} shallow kiddie-pool fills of this size (rough)",
        details: [
          "Sun evaporates shallow pools fast—refills can surprise parents.",
          "Covering overnight reduces debris and some evaporation.",
          "Emptying onto thirsty lawn beats the storm drain when soaps weren’t used.",
          "Supervision matters more than liter math for toddlers.",
          "Inflatable seams leak slowly—listen for hissing before topping up.",
        ],
      },
      {
        litersPerUnit: 60,
        singular: "About what drip-irrigation might use for a small veggie bed in a hot week (order of magnitude)",
        plural: "About {{n}} weeks of light drip watering for a small bed (very rough)",
        details: [
          "Mulch thickness changes how many drip minutes you need.",
          "Soil sensors beat guessing on scorching afternoons.",
          "Timing relative to sunrise cuts fungal risk on leaves.",
          "Drip emitters clog from hard water—filters help.",
          "Rain barrels can supplement but rarely replace extended drought plans.",
        ],
      },
      {
        litersPerUnit: 80,
        singular: "In the ballpark of filling an average bathtub only partway (not full to the brim)",
        plural: "About {{n}} partial bathtub fills (not full tubs)",
        details: [
          "Air jets and blowers don’t reduce the fill volume you started with.",
          "Insulated tubs hold heat longer—fewer top-offs from the hot tap.",
          "Bathing infants needs shallow stable depth, not adult volumes.",
          "Walking away while filling has overflow risk on distracted nights.",
          "Some regions price sewer charges from water meter reads—full tub shows up.",
        ],
      },
      {
        litersPerUnit: 90,
        singular: "Close to nine minutes of showering at this app’s default rate (10 L/min)—easy to compare with your timer",
        plural: "About {{n}} nine-minute blocks at 10 L/min (same rate as this calculator)",
        details: [
          "Navy-style showers (wet, off, soap, rinse) slash this curve quickly.",
          "Low-flow heads can approach half the liters per minute—verify labels.",
          "Waiting for hot water from a distant heater adds “hidden” flow before you step in.",
          "Singing playlists longer than planned is a common time thief.",
          "90 L here equals 9 × your 10 L/min assumption—not your physics grade.",
        ],
      },
      {
        litersPerUnit: 100,
        singular: "Enough to seriously water a small garden patch or several large houseplants",
        plural: "About {{n}} “100 L scale” uses for indoor watering or a small garden area",
        details: [
          "Houseplant trays catching drainage still paid for upstream tap water.",
          "Grouping thirsty plants avoids scatter-sprinkling the whole yard.",
          "Greywater rules differ—check local codes before routing shower overflow.",
          "Rain gauges help you skip irrigation after real storms.",
          "100 L sounds abstract until mapped to grocery crops you actually eat.",
        ],
      },
      {
        litersPerUnit: 120,
        singular: "Roughly one person’s total indoor water use for an entire very frugal day (all uses combined, estimate)",
        plural: "About {{n}} ultra-frugal person-days of indoor use (very rough)",
        details: [
          "National averages often land higher—your utility bill is the ground truth.",
          "Toilet leaks and irrigation dominate some households more than showers.",
          "Submetering laundry vs baths clarifies where liters really go.",
          "Vacation dips in meter reads expose slow leaks fast.",
          "Frugal doesn’t mean unsafe—hygiene still needs reliable water.",
        ],
      },
      {
        litersPerUnit: 130,
        singular: "Roughly a fuller fill of a large soaking bathtub—more than a quick dip",
        plural: "About {{n}} deep-soak tub volumes of this size (rough)",
        details: [
          "Cast iron tubs hold heat; acrylic cools faster—behavior changes soak length.",
          "Essential oils and salts don’t change the fill volume—only perception of luxury.",
          "Accessibility step-in tubs sometimes trade depth for door seals.",
          "Sharing bath water serially (kids after adults) is cultural and hygiene-sensitive.",
          "Draining to sewer is the norm—heat energy is usually the second cost.",
        ],
      },
      {
        litersPerUnit: 150,
        singular: "In the ballpark of an average hand car wash",
        plural: "About {{n}} hand car washes’ worth of water (rough estimate)",
        details: [
          "Salt-belt winters increase wash frequency—and cumulative liters.",
          "Underbody rinsing uses angles that spray past what drivers see.",
          "Foam cannons look dramatic but often dilute concentrates with same rinse need.",
          "Commercial reclaimed-water washes vary—ask operators if curious.",
          "Brake dust and soap are pollution topics beyond mere volume.",
        ],
      },
      {
        litersPerUnit: 200,
        singular: "Getting toward the volume of a family inflatable pool before it’s deeply filled",
        plural: "About {{n}} small inflatable pool fills (shallow, not a deep pool)",
        details: [
          "Round pool volume scales with radius squared—bigger patios jump fast.",
          "Treating pool water chemically changes disposal rules in some towns.",
          "Neighbor kids arriving unplanned doesn’t increase the fill—crowding does.",
          "Storing deflated vinyl in shade extends life versus sun-baked plastic.",
          "Heating kiddie pools with buckets of hot water is inefficient but common.",
        ],
      },
      {
        litersPerUnit: 250,
        singular: "In the order of a compact household emergency water drum or small storage tank (sizes vary a lot)",
        plural: "About {{n}} compact backup-drum equivalents (very rough)",
        details: [
          "Rotate stored drinking water on a schedule—stale taste means plan review.",
          "Opaque drums beat clear ones for algae control in sunny garages.",
          "Elevation helps gravity-fed hose use during outages.",
          "Label “potable” vs “flush only” saves panicked mistakes.",
          "Earthquake and storm prep lists often start near this volume per household.",
        ],
      },
    ],
  };
})(typeof window !== "undefined" ? window : globalThis);
