const burger = document.getElementById("burger");
const links = document.getElementById("links");
const navLinks = document.querySelectorAll(".nav-link");

burger.addEventListener("click", function() {
  links.classList.toggle("translate");
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const sectionId = link.getAttribute("href");
    scrollToSection(sectionId);
    
    // Close the navigation menu on mobile
    if (window.innerWidth <= 768) {
      links.classList.remove("translate");
    }
  });
});
