let navLinks = document.getElementsByClassName("nav-links");

function activeTab() {
  for (const navLink of navLinks) {
    navLink.classList.remove("activeLink");
  }
  event.currentTarget.classList.add("activeLink");
}

// -------------------SideMenu----------------
let menuBar = document.getElementById("sideMenu");

function openMenu() {
  menuBar.classList.toggle("menuwidth");
}
