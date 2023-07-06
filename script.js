const burger = document.getElementById("burger");
const links = document.getElementById("links");
const navLinks = document.querySelectorAll(".nav-link");
burger.addEventListener("click", function() {
  links.classList.toggle("translate");
});

document.getElementById("signup-button").addEventListener("click", function(event) {
  
  event.preventDefault();

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
  
  event.preventDefault();

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
  item.addEventListener('click', scrollTo);
});

function scrollTo(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  const navHeight = 85;
  const elementPosition = targetElement.getBoundingClientRect().top;
  const offsetPosition = elementPosition - navHeight;

  window.scrollTo({
     top: offsetPosition,
     behavior: "smooth"
  });
}
