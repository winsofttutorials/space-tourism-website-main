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
var images = document.getElementsByClassName("planetImages");

function tabContentSlider(plantimg, tabname) {
  for (const tabLink of tabLinks) {
    tabLink.classList.remove("activeTabLink");
  }

  for (const tabcontent of tabcontents) {
    tabcontent.classList.remove("activeTab");
  }

  for (const image of images) {
    image.classList.remove("activeImages");
  }

  event.currentTarget.classList.add("activeTabLink");
  document.getElementById(tabname).classList.add("activeTab");
  document.getElementById(plantimg).classList.add("activeImages");
}

var crewLinks = document.getElementsByClassName("activeCrewLink");
var crewTabs = document.getElementsByClassName("info");
var specialist = document.getElementsByClassName("specialist");

function crewSlider(crewimg, crewname) {
  for (const crewLink of crewLinks) {
    crewLink.classList.remove("activeCrewLink");
  }

  for (const crewTab of crewTabs) {
    crewTab.classList.remove("crewInfo");
  }

  for (const specialists of specialist) {
    specialists.classList.remove("activeImages");
  }

  event.currentTarget.classList.add("activeCrewLink");
  document.getElementById(crewname).classList.add("crewInfo");
  document.getElementById(crewimg).classList.add("activeImages");
}
