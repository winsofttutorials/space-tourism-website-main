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

// -----------------Destination tabinfo---------------
var tabLinks = document.getElementsByClassName("activeTabLinks");
var tabcontents = document.getElementsByClassName("tab-content");
var images = document.getElementsByClassName("imagesPhote");

function imagesGallery() {
  for (const image of images) {
    image.classList.remove("activeImages");
  }
  event.currentTarget.classList.add("activeImages");
}

function tabContentSlider(tabname) {
  for (const tabLink of tabLinks) {
    tabLink.classList.remove("activeTabLink");
  }

  for (const tabcontent of tabcontents) {
    tabcontent.classList.remove("activeTab");
  }
  imagesGallery();
  event.currentTarget.classList.add("activeTabLink");
  document.getElementById(tabname).classList.add("activeTab");
}
