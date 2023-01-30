const routes = [
  {
    name: "Culinair Friesland",
    subroutes: [leeuwardenFraneker, franekerSneek],
    theme: { food: "Eten in Friesland" },
    style: { relaxed: "Relaxed" },
    durationDays: [5, 6, 7, 8],
    cities: ["Leeuwarden", "Dokkum"],
  },
  {
    name: "Karins roadtrip",
    subroutes: [leeuwardenFraneker, franekerSneek],
    theme: { food: "Eten in Friesland", city: "Stad" },
    style: { relaxed: "Relaxed" },
    durationDays: [3],
    cities: ["Leeuwarden", "Dokkum"],
  },
  {
    name: "Anjas roadtrip",
    subroutes: [leeuwardenFraneker, franekerSneek],
    theme: { food: "Eten in Friesland", city: "Stad" },
    style: { adventure: "Avontuur" },
    durationDays: [3],
    cities: ["Sloten"],
  },
];
