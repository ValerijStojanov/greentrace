$(document).ready(function () {
  $(".slider-usp").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: $('.custom-prev'), 
    nextArrow: $('.custom-next'),
    variableWidth: true,
  });
  
});

$(document).ready(function () {
    var $slider = $(".slider-usp");
  
    function initSlider() {
      if ($(window).width() >= 768) {
        if (!$slider.hasClass('slick-initialized')) {
          $slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            prevArrow: $('.custom-prev'),
            nextArrow: $('.custom-next'),
            variableWidth: true,
          });
        }
      } else {
        if ($slider.hasClass('slick-initialized')) {
          $slider.slick('unslick');
        }
      }
    }
  
    initSlider();
  
    $(window).on('resize', function () {
      initSlider();
    });
  });
  



document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  const BurgerMenuButton = document.querySelector("#BurgerMenuButton");
  const checkbox = document.querySelector("#checkbox");
  const toggleImage = document.querySelector("#toggleImage");

  let menuOpen = false;

  BurgerMenuButton.addEventListener("click", function () {
    checkbox.click();

    if (menuOpen) {
      body.classList.remove("menu-open");
      BurgerMenuButton.classList.remove("menu-open");
      BurgerMenuButton.classList.add("menu-closed");

      toggleImage.classList.remove("fade-in");
      toggleImage.classList.add("fade-out");

      toggleImage.src = "source/images/burger-menu-svgrepo-com.svg";
      toggleImage.classList.remove("fade-out");
      toggleImage.classList.add("fade-in");
    } else {
      body.classList.add("menu-open");
      BurgerMenuButton.classList.remove("menu-closed");
      BurgerMenuButton.classList.add("menu-open");

      toggleImage.classList.remove("fade-in");
      toggleImage.classList.add("fade-out");

      toggleImage.src = "source/images/cross-svgrepo-com.svg";
      toggleImage.classList.remove("fade-out");
      toggleImage.classList.add("fade-in");
    }

    menuOpen = !menuOpen;
  });
});
