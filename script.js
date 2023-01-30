// Instantiate the map on the div with id "leaflet"
const map = L.map("leaflet", {
  center: [53.15, 5.8],
  zoom: 10.5,
});

// Add the tiles (the actual map-image)
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 16,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Layer of polylines/markers
let markers = new L.FeatureGroup().addTo(map);

// ROUTES
// Add lines (loop over routes)
routes.forEach((route) => {
  route.subroutes.forEach((subroute) => {
    L.polyline(subroute.latPoints, { color: "#0041cc" })
      .on("mouseover", function () {
        this.openPopup();
      })
      .on("mouseout", function () {
        this.closePopup();
      })
      .bindPopup("Duur van de route: ..." + subroute.duration)
      .addTo(markers);
  });
});

// MARKERS (loop over locations)
locations.forEach((location) => {
  new MyCustomMarker(location.location, {
    title: location.title,
  })
    .addTo(map)
    .bindPopup(
      `<h3>${location.title}</h3>
      <p>${location.popup.description}</p>
      <a href="${location.popup.website}" target="_blank">Website</a>
      <img style="width:100%" src="${location.popup.img}" alt="${
        location.title
      }" />
      <h4>Faciliteiten</h4>
      <div class='facilities'>
        ${Object.entries(location.popup.facilities)
          .map(([key, value]) => {
            return value.url || key === "tel"
              ? `<a class='${key}' href='${
                  value.url || value
                }' target="_blank">${value.name || value}</a>`
              : `<p class='${key}'>${value}</p>`;
          })
          .join("")}
      </div>`
    );
});

// Sidebar size change
const sizeButton = document.getElementById("sizeButton");
const sidebar = document.getElementById("sidebar");
const filterBar = document.getElementById("filterFunction");
sizeButton.addEventListener("click", test);

function test() {
  sidebar.classList.toggle("size");
  filterBar.classList.toggle("hidden");
}

// Current filters start off empty, updateMap() runs when it gets 'set' (when filters change)
const filterTracker = {
  set: function (target, key, value) {
    Reflect.set(...arguments);
    updateMap();
  },
};

const currentFilters = new Proxy(
  {
    style: [],
    theme: [],
    city: [],
    days: null,
  },
  filterTracker
);

// Listen for filter changes
const filterGroups = document.querySelectorAll("#filterFunction fieldset");

for (const filterGroup of filterGroups) {
  filterGroup.addEventListener("change", handleFilters);
}

function handleFilters(e) {
  const filters = [...this.querySelectorAll("input")];

  // A single number input
  if (filters.length === 1 && filters[0].type === "number") {
    const value = filters[0].value;
    currentFilters[this.name] = value;
  } else {
    // Checkboxes
    const activeFilters = filters
      .filter((filter) => filter.checked)
      .map((activeFilter) => activeFilter.id);
    currentFilters[this.name] = activeFilters;
  }
}

// Get all the route cards (unfiltered)
const routeCardsContainer = document.querySelector("#routeList");
const routeCards = [...document.getElementsByClassName("routeListItem")];

function updateMap() {
  const routesToShow = routes.filter((route) => {
    const themesOfRoute = Object.keys(route.theme);
    const routeThemesMatchFilter = themesOfRoute.some((theme) =>
      currentFilters.theme.includes(theme)
    );

    const stylesOfRoute = Object.keys(route.style);
    const routeStylesMatchFilter = stylesOfRoute.some((style) =>
      currentFilters.style.includes(style)
    );

    const citiesOfRoute = route.cities;
    const routeCitiesMatchFilter = citiesOfRoute.some((city) => {
      return currentFilters.city.includes(city.toLowerCase());
    });

    const routeDaysMatchFilter = route.durationDays.includes(
      parseInt(currentFilters.days)
    );

    return (
      routeDaysMatchFilter ||
      routeThemesMatchFilter ||
      routeStylesMatchFilter ||
      routeCitiesMatchFilter
    );
  });

  // Show only cards of the filtered routes
  const routesToShowNames = routesToShow.map((route) => route.name);
  const filteredRouteCards = routeCards.filter((card) =>
    routesToShowNames.includes(card.dataset.name)
  );

  const fragment = document.createDocumentFragment();
  filteredRouteCards.forEach(function (item) {
    fragment.appendChild(item.cloneNode(true));
  });

  // Clear the old results and append the new
  routeCardsContainer.innerHTML = "";
  routeCardsContainer.appendChild(fragment);
}

// Als je op een detail page klikt:
// // New layer of polylines/markers
// markers = new L.FeatureGroup().addTo(map);

// // Add the new filtered routes to new layer
// routesToShow.forEach((route) => {
//   route.subroutes.forEach((subroute) => {
//     L.polyline(subroute.latPoints, { color: "#0041cc" })
//       .on("mouseover", function () {
//         this.openPopup();
//       })
//       .on("mouseout", function () {
//         this.closePopup();
//       })
//       .bindPopup("Duur van de route: ..." + subroute.duration)
//       .addTo(markers);
//   });
// });

// Als je weer teruggaat naar de 'main' page:
// // Delete old layer of polylines/markers
// map.removeLayer(markers);
