const burger = document.getElementById("burger")
const links = document.getElementById("links")


burger.addEventListener("click", function(){
    links.classList.toggle("translate")
})

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".animation");
    const navHeight = document.querySelector("nav").offsetHeight;
  
    navLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        const targetOffsetTop = target.offsetTop - navHeight;
        window.scrollTo({
          top: targetOffsetTop,
          behavior: "smooth"
        });
      });
    });
  });
  

  
  
  