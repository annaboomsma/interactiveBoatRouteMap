const filters = [...document.getElementsByClassName("selectBtn")];

filters.forEach((filter) => {
  filter.addEventListener("click", toggleFilterDropdown);
});

function toggleFilterDropdown(e) {
  const parent = this.parentElement;
  parent.classList.toggle("open");
}
