console.log("Hey");

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
      .addTo(map);
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

// Listen for filter changes
const currentFilters = {};
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
