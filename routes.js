const routes = [
  {
    name: "Culinair Friesland",
    durationDays: [5, 6, 7, 8],
    style: { relaxed: "Relaxed" },
    theme: { city: "Stad" },
    img: "https://www.mijn-restaurant.nl/wp-content/uploads/2020/11/shutterstock_566567086.jpg",
    discription:
      "Dit is de route die je meeneemt door culinair Friesland. Je vaart langs alle steden en dorpen met het beste eten. En ziet ondertussen ook de prachtige natuur die Friesland je te bieden heeft.",
    subroutes: [
      lunegatDokkum,
      dokkumLeeuwarden,
      leeuwardenFraneker,
      franekerSneek,
      sneekLunegat,
    ],
    cities: ["Dokkum", "Leeuwarden", "Franeker", "Sneek"],
    routeSections: [
      {
        subroute: lunegatDokkum,
        title: "Lunegat - Dokkum",
        descriptionRouteSection:
          "Als eerste verlaat je de haven van Lunegat en vertrek je naar Dokkum. Dokkum is een oud fries stadje en is het keerpunt van de elfstedentocht. In Dokkum kan je heerlijk dineren bij het restaurant Proef lokaal Dokkum .",
        imgRouteSection:
          "https://foodtravelphotography.com/wp-content/uploads/2022/11/edward-howell-TACZ-gz4li4-unsplash-2-2.jpg",
        docks: ["Haven Dokkum"],
        tips: ["Proeflokaal Dokkum", "KB Dokkum", "De Weagh Dokkum"],
        meer: "https://google.com",
      },
      {
        subroute: dokkumLeeuwarden,
        title: "Dokkum - Leeuwarden",
        descriptionRouteSection:
          "Van Dokkum vaar je richting Leeuwarden over de Dokkumer ee. Onderweg kan je stoppen bij het restaurant It Pakhûs in Burdaard of kan je voor een drankje terecht bij de Grutte pier brouwerij. Eenmaal in Leeuwarden kan je lekker avond eten bij Roast.",
        imgRouteSection:
          "https://assets.citynavigator.nl/thumb/_nmZmPBnWlvH6D4Kdat4SPeVXOfHtXfKZZVC0mllrUw/resizing_type:fit/width:960/height:0/gravity:sm/enlarge:0/aHR0cHM6Ly9hc3NldHMuY2l0eW5hdmlnYXRvci5ubC9vZHAtZnJpZXNsYW5kL2ltYWdlL2I2ZmNlZTQwZjdkMGFmZTkxZjRjOWE4YmJlYjFhNzE1ZjYxYTBkNDEuanBlZw.jpeg",
        docks: ["Burdaard", "Prinsentuin Leeuwarden"],
        tips: [
          "It Posthûs Burdaard",
          "Grutte pier brouwerij",
          "Roast Leeuwarden",
        ],
        meer: "https://google.com",
      },
      {
        subroute: leeuwardenFraneker,
        title: "Leeuwarden - Franeker",
        descriptionRouteSection:
          "Na Leeuwarden vaar je naar Franeker. Onderweg kan je in Dronrijp heerlijk brood halen bij Van der Kloet Brood & Banket. Wanneer je door vaart naar Franeker kan je daar heerlijk eten bij Brasserie De Stadstuin. ",
        imgRouteSection:
          "https://www.diner-cadeau.nl/sites/all/files/styles/colorbox/public/media/restaurant/planetarium_eetcafe_dinerbon_0_0_1.png?itok=-Ar-I5na",
        docks: ["Dronrijp", "Passantenhaven Franeker", "Jachthaven Franeker"],
        tips: [
          "Van der Kloet Brood & Banket Dronrijp",
          "Brasserie De Stadstuin Franeker",
          "Grand Café De Doelen Franeker",
        ],
        meer: "https://google.com",
      },
    ],
  },
  {
    name: "Elfstedentocht",
    durationDays: [10, 11, 12, 13, 14, 15],
    style: { active: "Actief" },
    theme: { city: "Stad", cultural: "Cultureel" },
    img: "https://images0.persgroep.net/rcs/99BETDtZ4vkLIZV2s2cuUdE6Ihs/diocontent/74069182/_crop/0/86/1580/893/_fitwidth/763?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.8",
    discription:
      "Dit is de elfstedenroute. Met deze route vaar je langs alle 11 steden van Friesland. Je vaart door de mooiste wateren en ontdekt de geschiedenis van Friesland ",
    subroutes: [
      lunegatDokkum,
      dokkumLeeuwarden,
      leeuwardenFraneker,
      franekerSneek,
      sneekLunegat,
    ],
    cities: ["Dokkum", "Leeuwarden", "Franeker", "Sneek", "Franeker", "IJlst"],
    routeSections: [
      {
        subroute: lunegatDokkum,
        title: "Lunegat - Dokkum",
        descriptionRouteSection:
          "Als eerste verlaat je de haven van Lunegat en vertrek je naar Dokkum. Dokkum is een oud fries stadje en is het keerpunt van de elfstedentocht. In Dokkum kan je heerlijk dineren bij het restaurant Proef lokaal Dokkum .",
        imgRouteSection:
          "https://upload.wikimedia.org/wikipedia/commons/c/cd/DokkumCanal2_%2851238338982%29.jpg",
        docks: ["Haven Dokkum"],
        tips: ["Proeflokaal Dokkum", "KB Dokkum", "De Weagh Dokkum"],
        meer: "https://google.com",
      },
      {
        subroute: dokkumLeeuwarden,
        title: "Dokkum - Leeuwarden",
        descriptionRouteSection:
          "Van Dokkum vaar je richting Leeuwarden over de Dokkumer ee. Onderweg kan je stoppen bij het restaurant It Pakhûs in Burdaard of kan je voor een drankje terecht bij de Grutte pier brouwerij. Eenmaal in Leeuwarden kan je lekker avond eten bij Roast.",
        imgRouteSection:
          "https://upload.wikimedia.org/wikipedia/commons/f/fd/Leeuwarden%2C_Netherlands_-_panoramio_%2823%29.jpg",
        docks: ["Burdaard", "Prinsentuin Leeuwarden"],
        tips: [
          "It Posthûs Burdaard",
          "Grutte pier brouwerij",
          "Roast Leeuwarden",
        ],
        meer: "https://google.com",
      },
      {
        subroute: leeuwardenFraneker,
        title: "Leeuwarden - Franeker",
        descriptionRouteSection:
          "Na Leeuwarden vaar je naar Franeker. Onderweg kan je in Dronrijp heerlijk brood halen bij Van der Kloet Brood & Banket. Wanneer je door vaart naar Franeker kan je daar heerlijk eten bij Brasserie De Stadstuin. ",
        imgRouteSection:
          "https://assets.citynavigator.nl/thumb/kOaavEvGr6r6GQSF7pkvK0R0DC2BJIsapxA2ZO8-Caw/resizing_type:fit/width:960/height:0/gravity:sm/enlarge:0/aHR0cHM6Ly9hc3NldHMuY2l0eW5hdmlnYXRvci5ubC9rdW1hLXdhdGVybGFuZHZhbmZyaWVzbGFuZC91cGxvYWRzL21lZGlhLzVkNzI0NGRiZTA3NTcvc2h1dHRlcnN0b2NrLTEyNDAwNDE1NjItd2F0ZXJwb29ydC1zbmVlay5qcGc.jpg",
        docks: ["Dronrijp", "Passantenhaven Franeker", "Jachthaven Franeker"],
        tips: [
          "Van der Kloet Brood & Banket Dronrijp",
          "Brasserie De Stadstuin Franeker",
          "Grand Café De Doelen Franeker",
        ],
        meer: "https://google.com",
      },
    ],
  },
  {
    name: "Weekendje Cultuur",
    durationDays: [2, 3, 4],
    style: { adventure: "Avontuur" },
    theme: { specialPlaces: "Bijzondere plekken" },
    img: "https://assets.citynavigator.nl/thumb/6LbZUEzE3V85W6yrQpmS1qkGkTN7VVCS8fr7RW2tw-0/resizing_type:fit/width:780/height:0/gravity:sm/enlarge:0/aHR0cHM6Ly9hc3NldHMuY2l0eW5hdmlnYXRvci5ubC9vZHAtZnJpZXNsYW5kL2ltYWdlL2VsZnN0ZWRlbnRvY2h0LXBhdXplLXNjaGFhdHNiYW5ramUtZnJpZXNlLWRvb3Jsb3BlcnMtZG9ra3VtXzI5MjYyMjUyMDIuanBlZw.jpeg",
    discription:
      "Dit is de elfstedenroute. Met deze route vaar je langs alle 11 steden van Friesland. Je vaart door de mooiste wateren en ontdekt de geschiedenis van Friesland ",
    subroutes: [
      lunegatDokkum,
      dokkumLeeuwarden,
      leeuwardenFraneker,
      franekerSneek,
      sneekLunegat,
    ],
    cities: ["Dokkum", "Leeuwarden"],
    routeSections: [
      {
        subroute: lunegatDokkum,
        title: "Lunegat - Dokkum",
        descriptionRouteSection:
          "Als eerste verlaat je de haven van Lunegat en vertrek je naar Dokkum. Dokkum is een oud fries stadje en is het keerpunt van de elfstedentocht. In Dokkum kan je heerlijk dineren bij het restaurant Proef lokaal Dokkum .",
        imgRouteSection:
          "https://upload.wikimedia.org/wikipedia/commons/c/cd/DokkumCanal2_%2851238338982%29.jpg",
        docks: ["Haven Dokkum"],
        tips: ["Proeflokaal Dokkum", "KB Dokkum", "De Weagh Dokkum"],
        meer: "https://google.com",
      },
      {
        subroute: dokkumLeeuwarden,
        title: "Dokkum - Leeuwarden",
        descriptionRouteSection:
          "Van Dokkum vaar je richting Leeuwarden over de Dokkumer ee. Onderweg kan je stoppen bij het restaurant It Pakhûs in Burdaard of kan je voor een drankje terecht bij de Grutte pier brouwerij. Eenmaal in Leeuwarden kan je lekker avond eten bij Roast.",
        imgRouteSection:
          "https://upload.wikimedia.org/wikipedia/commons/f/fd/Leeuwarden%2C_Netherlands_-_panoramio_%2823%29.jpg",
        docks: ["Burdaard", "Prinsentuin Leeuwarden"],
        tips: [
          "It Posthûs Burdaard",
          "Grutte pier brouwerij",
          "Roast Leeuwarden",
        ],
        meer: "https://google.com",
      },
      {
        subroute: leeuwardenFraneker,
        title: "Leeuwarden - Franeker",
        descriptionRouteSection:
          "Na Leeuwarden vaar je naar Franeker. Onderweg kan je in Dronrijp heerlijk brood halen bij Van der Kloet Brood & Banket. Wanneer je door vaart naar Franeker kan je daar heerlijk eten bij Brasserie De Stadstuin. ",
        imgRouteSection:
          "https://assets.citynavigator.nl/thumb/kOaavEvGr6r6GQSF7pkvK0R0DC2BJIsapxA2ZO8-Caw/resizing_type:fit/width:960/height:0/gravity:sm/enlarge:0/aHR0cHM6Ly9hc3NldHMuY2l0eW5hdmlnYXRvci5ubC9rdW1hLXdhdGVybGFuZHZhbmZyaWVzbGFuZC91cGxvYWRzL21lZGlhLzVkNzI0NGRiZTA3NTcvc2h1dHRlcnN0b2NrLTEyNDAwNDE1NjItd2F0ZXJwb29ydC1zbmVlay5qcGc.jpg",
        docks: ["Dronrijp", "Passantenhaven Franeker", "Jachthaven Franeker"],
        tips: [
          "Van der Kloet Brood & Banket Dronrijp",
          "Brasserie De Stadstuin Franeker",
          "Grand Café De Doelen Franeker",
        ],
        meer: "https://google.com",
      },
    ],
  },
  {
    name: "Varen met de kleintjes",
    durationDays: [2, 3, 4],
    style: { adventure: "Avontuur" },
    theme: { nature: "Natuur", family: 'Gezin' },
    img: "https://www.aquazoo.nl/wp-content/uploads/2021/06/amoertijger-6.jpg",
    discription:
      "Dit is de elfstedenroute. Met deze route vaar je langs alle 11 steden van Friesland. Je vaart door de mooiste wateren en ontdekt de geschiedenis van Friesland ",
    subroutes: [
      lunegatDokkum,
      dokkumLeeuwarden,
      leeuwardenFraneker,
      franekerSneek,
      sneekLunegat,
    ],
    cities: ["Dokkum", "Leeuwarden"],
    routeSections: [
      {
        subroute: lunegatDokkum,
        title: "Lunegat - Dokkum",
        descriptionRouteSection:
                  "Als eerste verlaat je de haven van Lunegat en vertrek je naar Dokkum. Dokkum is een oud fries stadje en is het keerpunt van de elfstedentocht. In Dokkum kan je heerlijk dineren bij het restaurant Proef lokaal Dokkum .",
        imgRouteSection:
                  "https://upload.wikimedia.org/wikipedia/commons/c/cd/DokkumCanal2_%2851238338982%29.jpg",
        docks: ["Haven Dokkum"],
        tips: ["Proeflokaal Dokkum", "KB Dokkum", "De Weagh Dokkum"],
        meer: "https://google.com",
      },
      {
        subroute: dokkumLeeuwarden,
        title: "Dokkum - Leeuwarden",
        descriptionRouteSection:
                  "Van Dokkum vaar je richting Leeuwarden over de Dokkumer ee. Onderweg kan je stoppen bij het restaurant It Pakhûs in Burdaard of kan je voor een drankje terecht bij de Grutte pier brouwerij. Eenmaal in Leeuwarden kan je lekker avond eten bij Roast.",
        imgRouteSection:
                  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Leeuwarden%2C_Netherlands_-_panoramio_%2823%29.jpg",
        docks: ["Burdaard", "Prinsentuin Leeuwarden"],
        tips: [
          "It Posthûs Burdaard",
          "Grutte pier brouwerij",
          "Roast Leeuwarden",
        ],
        meer: "https://google.com",
      },
      {
        subroute: leeuwardenFraneker,
        title: "Leeuwarden - Franeker",
        descriptionRouteSection:
                  "Na Leeuwarden vaar je naar Franeker. Onderweg kan je in Dronrijp heerlijk brood halen bij Van der Kloet Brood & Banket. Wanneer je door vaart naar Franeker kan je daar heerlijk eten bij Brasserie De Stadstuin. ",
        imgRouteSection:
                  "https://assets.citynavigator.nl/thumb/kOaavEvGr6r6GQSF7pkvK0R0DC2BJIsapxA2ZO8-Caw/resizing_type:fit/width:960/height:0/gravity:sm/enlarge:0/aHR0cHM6Ly9hc3NldHMuY2l0eW5hdmlnYXRvci5ubC9rdW1hLXdhdGVybGFuZHZhbmZyaWVzbGFuZC91cGxvYWRzL21lZGlhLzVkNzI0NGRiZTA3NTcvc2h1dHRlcnN0b2NrLTEyNDAwNDE1NjItd2F0ZXJwb29ydC1zbmVlay5qcGc.jpg",
        docks: ["Dronrijp", "Passantenhaven Franeker", "Jachthaven Franeker"],
        tips: [
          "Van der Kloet Brood & Banket Dronrijp",
          "Brasserie De Stadstuin Franeker",
          "Grand Café De Doelen Franeker",
        ],
        meer: "https://google.com",
      },
    ],
  },
  {
    name: "Liefde voor natuur",
    durationDays: [5, 6, 7, 8, 9, 10],
    style: { relaxed: "Relaxed" },
    theme: { nature: "Natuur", specialPlaces: "Bijzondere plekken"},
    img: "https://www.dolopreizen.nl/wp-content/uploads/2021/10/Natuurgebied-Beetsterzwaag-Friesland-Nederland.jpg",
    discription:
      "Dit is de elfstedenroute. Met deze route vaar je langs alle 11 steden van Friesland. Je vaart door de mooiste wateren en ontdekt de geschiedenis van Friesland ",
    subroutes: [
      lunegatDokkum,
      dokkumLeeuwarden,
      leeuwardenFraneker,
      franekerSneek,
      sneekLunegat,
    ],
    cities: ["Dokkum", "Leeuwarden"],
    routeSections: [
      {
        subroute: lunegatDokkum,
        title: "Lunegat - Dokkum",
        descriptionRouteSection:
                  "Als eerste verlaat je de haven van Lunegat en vertrek je naar Dokkum. Dokkum is een oud fries stadje en is het keerpunt van de elfstedentocht. In Dokkum kan je heerlijk dineren bij het restaurant Proef lokaal Dokkum .",
        imgRouteSection:
                  "https://upload.wikimedia.org/wikipedia/commons/c/cd/DokkumCanal2_%2851238338982%29.jpg",
        docks: ["Haven Dokkum"],
        tips: ["Proeflokaal Dokkum", "KB Dokkum", "De Weagh Dokkum"],
        meer: "https://google.com",
      },
      {
        subroute: dokkumLeeuwarden,
        title: "Dokkum - Leeuwarden",
        descriptionRouteSection:
                  "Van Dokkum vaar je richting Leeuwarden over de Dokkumer ee. Onderweg kan je stoppen bij het restaurant It Pakhûs in Burdaard of kan je voor een drankje terecht bij de Grutte pier brouwerij. Eenmaal in Leeuwarden kan je lekker avond eten bij Roast.",
        imgRouteSection:
                  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Leeuwarden%2C_Netherlands_-_panoramio_%2823%29.jpg",
        docks: ["Burdaard", "Prinsentuin Leeuwarden"],
        tips: [
          "It Posthûs Burdaard",
          "Grutte pier brouwerij",
          "Roast Leeuwarden",
        ],
        meer: "https://google.com",
      },
      {
        subroute: leeuwardenFraneker,
        title: "Leeuwarden - Franeker",
        descriptionRouteSection:
                  "Na Leeuwarden vaar je naar Franeker. Onderweg kan je in Dronrijp heerlijk brood halen bij Van der Kloet Brood & Banket. Wanneer je door vaart naar Franeker kan je daar heerlijk eten bij Brasserie De Stadstuin. ",
        imgRouteSection:
                  "https://assets.citynavigator.nl/thumb/kOaavEvGr6r6GQSF7pkvK0R0DC2BJIsapxA2ZO8-Caw/resizing_type:fit/width:960/height:0/gravity:sm/enlarge:0/aHR0cHM6Ly9hc3NldHMuY2l0eW5hdmlnYXRvci5ubC9rdW1hLXdhdGVybGFuZHZhbmZyaWVzbGFuZC91cGxvYWRzL21lZGlhLzVkNzI0NGRiZTA3NTcvc2h1dHRlcnN0b2NrLTEyNDAwNDE1NjItd2F0ZXJwb29ydC1zbmVlay5qcGc.jpg",
        docks: ["Dronrijp", "Passantenhaven Franeker", "Jachthaven Franeker"],
        tips: [
          "Van der Kloet Brood & Banket Dronrijp",
          "Brasserie De Stadstuin Franeker",
          "Grand Café De Doelen Franeker",
        ],
        meer: "https://google.com",
      },
    ],
  },
];
