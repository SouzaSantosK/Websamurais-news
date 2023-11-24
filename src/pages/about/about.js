let sections = document.querySelectorAll("section");

sections.forEach((section) => {
  section.addEventListener("mouseover", function () {
    sections.forEach((sec) => sec.classList.remove("active"));
    this.classList.add("active");
  });
});
