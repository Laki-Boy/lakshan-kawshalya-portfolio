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

const heroTextRole = document.querySelector(".hero-text-role");
const heroTextRoleCursor = document.querySelector(".hero-text-role-cursor");
const heroTextRoleArray = [
  "Web Developer",
  "Graphic Designer",
  "Brand Developer",
];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < heroTextRoleArray[textArrayIndex].length) {
    if (!heroTextRoleCursor.classList.contains("typing"))
      heroTextRoleCursor.classList.add("typing");
    heroTextRole.textContent +=
      heroTextRoleArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    heroTextRoleCursor.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!heroTextRoleCursor.classList.contains("typing"))
      heroTextRoleCursor.classList.add("typing");
    heroTextRole.textContent = heroTextRoleArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    heroTextRoleCursor.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= heroTextRoleArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, newTextDelay + 200);
});
