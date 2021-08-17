function mobileNavigationToggler() {
  var navbar = document.getElementById("navbar");
  var contentBlur = document.getElementById("contentBlur");

  if (navbar.className == "navbar navbar-dekstop") {
    navbar.className += " navbar-mobile";
    contentBlur.className = "content-blur";
  } else {
    navbar.className = "navbar navbar-dekstop";
    contentBlur.className = "";
  }
}

function mobileNavigationLink() {
  var navbar = document.getElementById("navbar");
  var contentBlur = document.getElementById("contentBlur");

  if ((navbar.className = "navbar navbar-dekstop navbar-mobile")) {
    navbar.className = "navbar navbar-dekstop";
    contentBlur.className = "";
  }
}
