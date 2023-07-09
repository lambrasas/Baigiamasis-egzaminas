window.onload = function() {
  const burger = document.getElementById("burger");
  const links = document.getElementById("links");
  const navLinks = document.querySelectorAll(".nav-link");
  const navBar = document.querySelector("nav");

  burger.addEventListener("click", function() {
    links.classList.toggle("translate");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default link behavior
      
      const targetId = this.getAttribute("href"); // Get the target section ID
      const targetSection = document.querySelector(targetId); // Get the target section element
      
      if (targetSection) {
        const navHeight = document.querySelector("nav").offsetHeight; // Get the height of the navigation bar
        const targetOffset = targetSection.offsetTop - navHeight; // Calculate the adjusted scroll position

       

        window.scrollTo({
          top: targetOffset,
          behavior: "smooth" // Optionally, add smooth scrolling effect
        });
        
        links.classList.remove("translate"); // Close the menu
      }
    });
  });

  document.getElementById("signup-button").addEventListener("click", function(event) {
    var nameInput = document.getElementById("name");
    var surnameInput = document.getElementById("surname");
    var phoneInput = document.getElementById("phone");
    var subscriptionInputs = document.querySelectorAll("input[name='sub']");
    var selectedSubscription = "";

    subscriptionInputs.forEach(function(input) {
      if (input.checked) {
        selectedSubscription = input.value;
      }
    });

    if (!validateInput(nameInput, "name", /^[A-Za-z]+$/)) return;
    if (!validateInput(surnameInput, "surname", /^[A-Za-z]+$/)) return;
    if (!validateInput(phoneInput, "phone number", /^[0-9+]+$/)) return;

     var userData = {
      name: nameInput.value.trim(),
      surname: surnameInput.value.trim(),
      phone: phoneInput.value.trim(),
      subscription: selectedSubscription
    };

    saveUserData(userData, "firstUserData");
    clearInputs(nameInput, surnameInput, phoneInput);
  });

  document.getElementById("second-signup-button").addEventListener("click", function(event) {
    var nameInput2 = document.getElementById("second-name");
    var surnameInput2 = document.getElementById("second-surname");
    var phoneInput2 = document.getElementById("second-phone");
    var subscriptionInputs2 = document.querySelectorAll("input[name='type']");
    var selectedSubscription = "";

    subscriptionInputs2.forEach(function(input) {
      if (input.checked) {
        selectedSubscription = input.value;
      }
    });

    if (!validateInput(nameInput2, "name", /^[A-Za-z]+$/)) return;
    if (!validateInput(surnameInput2, "surname", /^[A-Za-z]+$/)) return;
    if (!validateInput(phoneInput2, "phone number", /^[0-9+]+$/)) return;

     var userData = {
      name: nameInput2.value.trim(),
      surname: surnameInput2.value.trim(),
      phone: phoneInput2.value.trim(),
      subscription: selectedSubscription
    };

    saveUserData(userData, "secondUserData");
    clearInputs(nameInput2, surnameInput2, phoneInput2);
  });

  function validateInput(input, fieldName, regex) {
    var value = input.value.trim();

    if (!regex.test(value)) {
      alert("Invalid " + fieldName + ".");
      input.focus();
      return false;
    }

    return true;
  }

  function saveUserData(userData,key) {
    var userDataString = JSON.stringify(userData);
    localStorage.setItem("userData", userDataString);
  }

  function clearInputs(...inputs) {
    inputs.forEach(function(input) {
      input.value = "";
    });
  }

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  function clickHandler(e) {
    var target = e.target;
    if(target.type=="submit"){
      target.classList.toggle("clicked")
    }
    else{
      var button=target.parentNode
      button.classList.toggle("clicked")
    }
  }

  document.querySelectorAll('.animation').forEach(item => {
    item.addEventListener('click', function(event) {
      scrollTo(event.currentTarget);
    });
  });

  function scrollTo(target) {
    const targetId = target.getAttribute('href'); // Get the target section ID
    const targetSection = document.querySelector(targetId); // Get the target section element

    if (targetSection) {
      const navHeight = document.querySelector("nav").offsetHeight; // Get the height of the navigation bar
      const targetOffset = targetSection.offsetTop - navHeight; // Calculate the adjusted scroll position

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth" // Optionally, add smooth scrolling effect
      });

      links.classList.remove("translate"); // Close the menu
    } else {
      console.error("Target section not found:", targetId);
    }

    return false;
  }
}
const buttons = document.querySelectorAll(".sign-up-buttons button");

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      buttons.forEach((btn) => {
        btn.classList.remove('clicked');
      });
      e.currentTarget.classList.add('clicked');
    });
  });