const routes = [
  {
    name: "Culinair Friesland",
    durationDays: [5, 6, 7, 8],
    style: 'Relaxed',
    theme: ["Stad"],
    img: "https://pennypaws.com/wp-content/uploads/2022/06/elena-mozhvilo-UspYqrVBsIo-unsplash-1-scaled.jpg",
    discription: " Dit is de route die je meeneemt door culinair Friesland. Je vaart langs alle steden en dorpen met het beste eten. En ziet ondertussen ook de prachtige natuur die Friesland je te bieden heeft.",
    subroutes: [leeuwardenFraneker, franekerSneek],
    cities: ['Dokkum','Leeuwarden','Franeker','Sneek'],
    routeSections: [{
        subroute: lunegatDokkum,
        title: "Lunegat - Dokkum",
        descriptionRouteSection: "Als eerste verlaat je de haven van Lunegat en vertrek je naar Dokkum. Dokkum is een oud fries stadje en is het keerpunt van de elfstedentocht. In Dokkum kan je heerlijk dineren bij het restaurant Proef lokaal Dokkum .",
        imgRouteSection: "https://pennypaws.com/wp-content/uploads/2022/06/elena-mozhvilo-UspYqrVBsIo-unsplash-1-scaled.jpg",
        docks: ['Haven Dokkum'],
        tips: ['Proeflokaal Dokkum', 'KB Dokkum', 'De Weagh Dokkum'],
        meer: 'https://google.com'
      },
      {
        subroute: lunegatDokkum,
        title: "Lunegat - Dokkum",
        descriptionRouteSection: "Als eerste verlaat je de haven van Lunegat en vertrek je naar Dokkum. Dokkum is een oud fries stadje en is het keerpunt van de elfstedentocht. In Dokkum kan je heerlijk dineren bij het restaurant Proef lokaal Dokkum .",
        imgRouteSection: "https://pennypaws.com/wp-content/uploads/2022/06/elena-mozhvilo-UspYqrVBsIo-unsplash-1-scaled.jpg",
        docks: ['Haven Dokkum', 'Haven Leeuwarden'],
        tips: ['Proeflokaal Dokkum', 'KB Dokkum', 'De Weagh Dokkum'],
        meer: 'https://google.com'
      }]
  },
];

