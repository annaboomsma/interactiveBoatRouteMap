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

// GLOBAL VARIABLES/STATE ---------------------------------------------------------------------------
let currentRoute = null; // The route thats currently clicked
let activitiesVisible = {
  // Whether each activity layer is visible or not
  harbor: false,
  restaurant: false,
  cultural: false,
  family: false,
  activity: false,
};

// Current filters start off empty, updateMap() runs when it gets 'set' (when filters change)
const filterTracker = {
  set: function (target, key, value) {
    Reflect.set(...arguments);
    updateMap();
  },
};

const currentFilters = new Proxy( // Currently active filters
  {
    style: [],
    theme: [],
    city: [],
    days: 0,
  },
  filterTracker
);

// Layers of polylines/markers
let lines;
let markers;
// END GLOBAL VARIABLES ---------------------------------------------------------------------------

function createMapLayers() {
  lines = new L.FeatureGroup().addTo(map);
  markers = {
    harbor: new L.FeatureGroup().addTo(map),
    restaurant: new L.FeatureGroup().addTo(map),
    cultural: new L.FeatureGroup().addTo(map),
    family: new L.FeatureGroup().addTo(map),
    activity: new L.FeatureGroup().addTo(map),
  };
  Object.keys(activitiesVisible).forEach((activity) => {
    activitiesVisible[activity] = true;
  });
}
createMapLayers();

function removeMapLayers() {
  Object.keys(markers).forEach((markerLayer) => {
    map.removeLayer(markers[markerLayer]);
  });
  map.removeLayer(lines);

  Object.keys(activitiesVisible).forEach((activity) => {
    activitiesVisible[activity] = false;
  });
  currentRoute = null;
}

const activityButtons = document.getElementsByClassName("activityButton");
for (const btn of activityButtons) {
  btn.addEventListener("click", toggleActivities);
}

function toggleActivities() {
  const activityType = this.dataset.activityType;

  // If there is no active route clicked, filter/show all locations
  if (!currentRoute) {
    // TODO: Filter/show all locations
    return;
  }

  // If there is a current route, filter/show only the activities of the current route
  // Turn activities on
  if (!activitiesVisible[activityType]) {
    markers[activityType] = new L.FeatureGroup().addTo(map);

    filteredLoc = currentRoute.locations.filter(
      (loc) => loc.type === activityType
    );

    filteredLoc.forEach((location) => {
      const marker = new MyCustomMarker(location.location, {
        title: location.title,
      });
      marker.addTo(markers[activityType]).bindPopup(
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

      L.DomUtil.addClass(marker._icon, locationColors[location.type]);
    });
    activitiesVisible[activityType] = true;
  } else {
    // Turn activities off
    map.removeLayer(markers[activityType]);
    activitiesVisible[activityType] = false;
  }
}

//dynamic routelist
const routeList = document.querySelector("#routeList");

routeList.innerHTML = routes
  .map((route) => {
    return `
<div data-name="${
      route.name
    }" class="routeListItem" style='background-image: url("${route.img}")'>
              <ul class="routeAttributes">
                <li>
                  <i class="fa-regular fa-clock"></i>
                  ${route.durationDays[0]} tot ${route.durationDays.at(
      -1
    )} dagen
                </li>
                <li>
                  <i class="fa-solid fa-chart-line"></i>
                  ${Object.values(route.style)[0]}
                </li>
                <li>
                  <i class="fa-regular fa-eye"></i>
                  ${Object.values(route.theme)
                    .map((theme) => theme + " ")
                    .join("")}
                </li>
              </ul>
              <h2 class="routeTitle">${route.name}</h2>
            </div>  
  `;
  })
  .join("");

//sidebar size change
const sizeButton = document.getElementById("sizeButton");
const sidebar = document.getElementById("sidebar");
const filterBar = document.getElementById("filterFunction");
sizeButton.addEventListener("click", resizeSidebar);

function resizeSidebar() {
  sidebar.classList.toggle("size");
  filterBar.classList.toggle("hidden");
}

//detail pagina toggle
const homepage = document.querySelector(".homepage");
const detailpage = document.querySelector(".detailpage");
const routeListItems = document.querySelectorAll(".routeListItem");
const exitButton = document.querySelector(".exitButton");
const introRoute = document.querySelector(".introRoute");
const routeSection = document.querySelector(".routeSection");

routeListItems.forEach((item) => {
  item.addEventListener("click", detailPageFunc);
});
exitButton.addEventListener("click", backToHome);

function detailPageFunc(event) {
  sidebar.classList.remove("size");
  filterBar.classList.add("hidden");
  homepage.classList.toggle("hidden");
  detailpage.classList.toggle("hidden");

  // The clicked route
  const routeTitle = this.querySelector("h2").textContent;
  const route = routes.find((route) => route.name === routeTitle);
  currentRoute = route;

  // Make a new layer for the markers/lines
  createMapLayers();

  // Draw ROUTES (polylines) of the route
  route.subroutes.forEach((subroute) => {
    L.polyline(subroute.latPoints, { color: "#2257A1", weight: 4 })
      .on("mouseover", function () {
        this.setStyle({ color: "#f3a91a" });
        this.openPopup();
      })
      .on("mouseout", function () {
        this.setStyle({ color: "#2257A1" });
        this.closePopup();
      })
      .bindPopup("Duur van de route: " + subroute.duration)
      .addTo(lines);
  });

  // Draw ALL MARKERS of the route (locations)
  route.locations.forEach((location) => {
    const marker = new MyCustomMarker(location.location, {
      title: location.title,
    });

    marker.addTo(markers[location.type]).bindPopup(
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

    L.DomUtil.addClass(marker._icon, locationColors[location.type]);
  });

  introRoute.innerHTML = `
     <h2 class="routeSectionTitle">  ${route.name}</h2>
     <ul class="routeAttributesDetail">
              <li>
                <i class="fa-regular fa-clock"></i>
                ${route.durationDays[0]} tot ${route.durationDays.at(-1)} dagen
              </li>
              <li>
                <i class="fa-solid fa-chart-line"></i>
                ${Object.values(route.style)[0]}
              </li>
              <li>
                <i class="fa-regular fa-eye"></i>
                 ${Object.values(route.theme)
                   .map((theme) => theme + " ")
                   .join("")}
              </li>
     </ul>
     <img src="${route.img}" alt="${route.name}" />        
     <p>${route.discription}</p> `;

  routeSection.innerHTML = route.routeSections
    .map((section) => {
      return `
    <h3 class="routeSectionTitle">${section.title}</h3>
    <ul>
     <li>
     <i class="fa-regular fa-clock"></i>
      Ongeveer ${section.subroute.duration}
     </li>
     </ul>
     <p>${section.descriptionRouteSection}</p>
      <img src="${section.imgRouteSection}" alt="" />
      <div class="docks">
         <h4>Aanmeren</h4>
         <ol>
            ${section.docks
              .map(
                (dock) =>
                  `<li>
               <a href="">${dock}</a>
            </li>`
              )
              .join("")}
         </ol>
         <a href="https://varenmetsil.nl/hoe-moet-ik-een-boot-aanleggen/">Hoe moet ik aanmeren?</a>
      </div>
      <div class="tips">
              <h4>Leuk om te doen</h4>
              <ol>
               ${section.tips
                 .map(
                   (tip) =>
                     `<li>
                  <a href="">${tip}</a>
                </li>`
                 )
                 .join("")}
              </ol>
              <a href="${section.meer}">Meer...</a>
            </div>
  `;
    })
    .join("");
}

function backToHome() {
  homepage.classList.toggle("hidden");
  detailpage.classList.toggle("hidden");
  removeMapLayers();
}

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
  let routesToShow;

  if (
    // If no filters, show all
    parseInt(currentFilters.days) <= 0 &&
    Object.values(currentFilters)
      .filter((f) => Array.isArray(f))
      .every((filterArray) => filterArray.length === 0)
  ) {
    routesToShow = routes;
  } else {
    routesToShow = routes.filter((route) => {
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
  }

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

  const routeListItems = document.querySelectorAll(".routeListItem");
  const exitButton = document.querySelector(".exitButton");
  routeListItems.forEach((item) => {
    item.addEventListener("click", detailPageFunc);
  });
  exitButton.addEventListener("click", backToHome);
}
