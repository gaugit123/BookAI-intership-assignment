var moon = document.getElementById("moon");
moon.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    moon.src = "brightness-high-fill.png";
    moon.style.backgroundColor = "#19052c";
  } else {
    moon.src = "cloud-moon-fill.png";
  }
};

function myfunction() {
  var navbar = document.getElementById("nav");
  navbar.classList.toggle("show");
}
