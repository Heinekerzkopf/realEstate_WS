document.querySelector(".header__logo").onclick = function(event) {
    event.preventDefault();
}
//========================================================================================================================================================
// HEADER MENU

const body = document.querySelector("body");
const menuBtn = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu__body");

//========================================================================================================================================================

menuBtn.addEventListener("click", () => {
    body.classList.toggle('lock');
    menuBody.classList.toggle('body-active');
    menuBtn.classList.toggle('active');
});

//========================================================================================================================================================
// HEADER SCROLL 
// SOCIAL SCROLL

const header = document.querySelector('.header');
const social = document.querySelector('.social');

window.addEventListener('scroll', function () {
    if (window.scrollY > 52) {
        header.classList.add('header__scroll');
        social.style.cssText = 'right: 30px';
    } else {
        header.classList.remove('header__scroll');
        social.style.cssText = 'right: -50px';
    }
});


//========================================================================================================================================================
// input - placeholder

const inputOne = document.querySelector("#input-one");

const placeholder = inputOne.placeholder;

// Add an event listener for when the input is focused
inputOne.addEventListener('focus', function() {
  // Clear the placeholder when the input is focused
  inputOne.placeholder = '';
});

// Add an event listener for when the input is blurred
inputOne.addEventListener('blur', function() {
  // If the input value is empty, restore the placeholder value
  if (inputOne.value === '') {
    inputOne.placeholder = placeholder;
  }
});

//========================================================================================================================================================

const submitButton = document.querySelector('.content-mainblock__button');

function validateEmail() {
  const email = inputOne.value.trim();

  // Email validation regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email)) {
    // Email is valid
    inputOne.classList.remove("invalid");
    inputOne.classList.add("valid");
    return true;
  } else {
    // Email is invalid
    inputOne.classList.remove("valid");
    inputOne.classList.add("invalid");
    return false;
  }
}
//========================================================================================================================================================

submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // prevent form submission

  validateEmail();
});

inputOne.addEventListener("input", validateEmail);
//========================================================================================================================================================

let errorSpan = document.querySelector('.error');

submitButton.addEventListener("click", () => {
  if(inputOne.classList.contains('invalid')) {
    errorSpan.textContent = 'Invalid email!'
  } else if(inputOne.classList.contains('valid')) {
    errorSpan.textContent = '✓';
  }
});

//========================================================================================================================================================

const swiper = new Swiper('.slider-mainblock', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-mainblock__arrow.swiper-button-next',
      prevEl: '.slider-mainblock__arrow.swiper-button-prev',
    },
  
  });

//========================================================================================================================================================

// tabs 

const tabNavItems = document.querySelectorAll(".tabs-deals__button");
const tabItems = document.querySelectorAll(".item-tabs");

document.addEventListener("click", function(e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;
  if(targetElement.closest('.tabs-deals__button')) {
    tabNavItems.forEach((tabNavItems, index) => {
      if (tabNavItems.classList.contains('tab-active')) {
        currentActiveIndex = index;
        tabNavItems.classList.remove('tab-active');
      }
      if (tabNavItems === targetElement) {
        newActiveIndex = index;
      }
    });
    // targetElement.classList.add('tab-item__active');
    tabItems[currentActiveIndex].classList.remove('tab-item__active');
    tabItems[newActiveIndex].classList.add('tab-item__active');
    tabNavItems[newActiveIndex].classList.add('tab-active');
  }
});
