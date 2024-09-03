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
