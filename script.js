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

//sidebar size change
const sizeButton = document.getElementById("sizeButton");
const sidebar = document.getElementById("sidebar");
const filterBar = document.getElementById("filterFunction");
sizeButton.addEventListener("click", test);

function test() {
  sidebar.classList.toggle("size");
  filterBar.classList.toggle("hidden");
  console.log(sidebar);
}

//detail pagina toggle

const homepage = document.querySelector(".homepage")
const detailpage = document.querySelector('.detailpage')
const routeListItems = document.querySelectorAll('.routeListItem')
const exitButton = document.querySelector('.exitButton')
const introRoute = document.querySelector(".introRoute")
const routeSection = document.querySelector(".routeSection")


routeListItems.forEach(item => {
  item.addEventListener("click", detailPageFunc)
})
exitButton.addEventListener("click", backToHome)

function detailPageFunc(event){
  homepage.classList.toggle("hidden");
  detailpage.classList.toggle("hidden");

  const routeTitle = this.querySelector('h2').textContent

  const route = routes.find(route => route.name===routeTitle)

  introRoute.innerHTML = (`
     <h2 class="routeSectionTitle">  ${route.name}</h2>
     <ul class="routeAttributesDetail">
              <li>
                <i class="fa-regular fa-clock"></i>
                ${route.durationDays[0]} tot ${route.durationDays.at(-1)} dagen
              </li>
              <li>
                <i class="fa-solid fa-chart-line"></i>
                ${route.style}
              </li>
              <li>
                <i class="fa-regular fa-eye"></i>
                ${route.theme[0]}
              </li>
     </ul>
     <img src="${route.img}" alt="${route.name}" />        
     <p>${route.discription}</p> `)


    routeSection.innerHTML = route.routeSections.map(section => { return (`
    <h3 class="routeSectionTitle">${section.title}</h3>
    <ul>
     <li>
     <i class="fa-regular fa-clock"></i>
      Ongeveer ${section.subroute.duration}
     </li>
     </ul>
     <p>${section.descriptionRouteSection}</p>
      <img src="${section.imgRouteSection}" alt="" />
      
  `)
  })


}

function backToHome(){
  homepage.classList.toggle("hidden");
  detailpage.classList.toggle("hidden");
}

//dynamic route detail page


