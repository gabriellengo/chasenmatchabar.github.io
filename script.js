// variables
var menuClassics = document.getElementById("menu-1");
var menuSpecial = document.getElementById("menu-2");
var menuKettl = document.getElementById("menu-3");
var btnClassics = document.getElementById("classics");
var btnSpecial = document.getElementById("specialties");
var btnKettl = document.getElementById("kettl");

function showClassics() {
  menuClassics.style.display ="block";
  menuSpecial.style.display ="none";
  menuKettl.style.display ="none";
  btnClassics.classList.replace("menu-button", "menu-button-active");
  btnSpecial.classList.replace("menu-button-active", "menu-button");
  btnKettl.classList.replace("menu-button-active", "menu-button");
}

function showSpecials() {
  menuClassics.style.display = "none";
  menuSpecial.style.display ="block";
  menuKettl.style.display = "none;"
  btnClassics.classList.replace("menu-button-active", "menu-button");
  btnSpecial.classList.replace("menu-button", "menu-button-active");
  btnKettl.classList.replace("menu-button-active", "menu-button");
}

function showKettl() {
  menuClassics.style.display = "none";
  menuSpecial.style.display ="none";
  menuKettl.style.display = "block";
  btnClassics.classList.replace("menu-button-active", "menu-button");
  btnSpecial.classList.replace("menu-button-active", "menu-button");
  btnKettl.classList.replace("menu-button", "menu-button-active");
}
