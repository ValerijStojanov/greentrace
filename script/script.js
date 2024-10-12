document.addEventListener("DOMContentLoaded", function () {
  const BurgerMenuButton = document.querySelector("#BurgerMenuButton");
  const checkbox = document.querySelector("#checkbox");
  const toggleImage = document.querySelector("#toggleImage");

  let menuOpen = false;

  BurgerMenuButton.addEventListener("click", function () {
    checkbox.click();

    if (menuOpen) {
      BurgerMenuButton.classList.remove("menu-open");
      BurgerMenuButton.classList.add("menu-closed");
      toggleImage.src = "source/images/burger-menu-svgrepo-com.svg";
    } else {
      BurgerMenuButton.classList.remove("menu-closed");
      BurgerMenuButton.classList.add("menu-open");
      toggleImage.src = "source/images/cross-svgrepo-com.svg";
    }

    menuOpen = !menuOpen;
  });
});

const menuItems = [
  { triggerId: "AboutUsMenu", targetId: "AboutUs" },
  { triggerId: "ImpactMenu", targetId: "Impact" },
  { triggerId: "SolutionsMenu", targetId: "Solutions" },
  { triggerId: "MilestonesUsMenu", targetId: "Milestones" },
  { triggerId: "ContactUsButton", targetId: "ContactUs" },
  { triggerId: "LearnMoreButton", targetId: "AboutUs" },
  { triggerId: "AboutUsMenuBurger", targetId: "AboutUs" },
  { triggerId: "ImpactMenuBurger", targetId: "Impact" },
  { triggerId: "SolutionsMenuBurger", targetId: "Solutions" },
  { triggerId: "MilestonesUsMenuBurger", targetId: "Milestones" },
  { triggerId: "ContactUsButtonBurger", targetId: "ContactUs" },
];

menuItems.forEach(({ triggerId, targetId }) => {
  const triggerElement = document.getElementById(triggerId);
  const targetElement = document.getElementById(targetId);
  const BurgerMenuButton = document.querySelector("#BurgerMenuButton");
  if (triggerElement && targetElement) {
    triggerElement.onclick = () => {
      targetElement.scrollIntoView({ behavior: "smooth" });
    };
  }
});
