const navLinks = document.querySelectorAll("nav a");
const box = document.getElementById("box");

function moveBoxToLink(link, e) {
  let rect = link.getBoundingClientRect();

  let left = e === window ? rect.left - 25 : rect.left;
  let opacity = e === window ? 0 : 0.8;

  box.style.transform = "translate(" + left + "px, " + rect.top + "px)";
  box.style.width = rect.width + "px";
  box.style.height = rect.height + "px";
  box.style.opacity = opacity;
}

window.onload = function () {
  moveBoxToLink(document.getElementById("first-link"), window);
};

navLinks.forEach((link) => {
  link.addEventListener("mouseover", function (e) {
    moveBoxToLink(this, e);
  });

  link.addEventListener("mouseout", function () {
    box.style.opacity = "0";
  });
});
