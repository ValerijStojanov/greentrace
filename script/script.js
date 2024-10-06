document.addEventListener("DOMContentLoaded", function () {
  const html = document.querySelector("html");
  const BurgerMenuButton = document.querySelector("#BurgerMenuButton");
  const checkbox = document.querySelector("#checkbox");
  const toggleImage = document.querySelector("#toggleImage");

  let menuOpen = false;

  BurgerMenuButton.addEventListener("click", function () {
    checkbox.click();

    if (menuOpen) {
      html.classList.remove("menu-open");
      BurgerMenuButton.classList.remove("menu-open");
      BurgerMenuButton.classList.add("menu-closed");

      toggleImage.classList.remove("fade-in");
      toggleImage.classList.add("fade-out");

      toggleImage.src = "source/images/burger-menu-svgrepo-com.svg";
      toggleImage.classList.remove("fade-out");
      toggleImage.classList.add("fade-in");
    } else {
      html.classList.add("menu-open");
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

    document.getElementById("AboutUsMenu").onclick = function() {
        document.getElementById("AboutUs").scrollIntoView({ behavior: 'smooth' });
    };
    document.getElementById("ImpactMenu").onclick = function() {
        document.getElementById("Impact").scrollIntoView({ behavior: 'smooth' });
    };
    document.getElementById("SolutionsMenu").onclick = function() {
        document.getElementById("Solutions").scrollIntoView({ behavior: 'smooth' });
    };
    document.getElementById("MilestonesUsMenu").onclick = function() {
        document.getElementById("Milestones").scrollIntoView({ behavior: 'smooth' });
    };
    document.getElementById("ContactUsButton").onclick = function() {
      document.getElementById("ContactUs").scrollIntoView({ behavior: 'smooth' });
  };

// // Функция для плавного скроллинга
// function scrollToElement(elementId) {
//   const element = document.getElementById(elementId);
//   if (element) {
//     element.scrollIntoView({ behavior: 'smooth' });
//   }
// }

// // Назначаем события click на элементы
// document.getElementById('about-us').addEventListener('click', function() {
//   scrollToElement('about-us');
// });

// document.getElementById('Impact').addEventListener('click', function() {
//   scrollToElement('Impact');
// });

// document.getElementById('Solutions-menu').addEventListener('click', function() {
//   scrollToElement('Solutions');
// });
