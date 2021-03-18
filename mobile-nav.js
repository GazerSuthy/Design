const navBurger = document.querySelector(".burger");
const nav = document.querySelector(".mobile-nav");

navBurger.addEventListener("click", () => {
  let nav_opened = nav.classList.contains("show-navigation");
  let nav_closed = nav.classList.contains("hide-navigation");

  //first time opening mobile nav
  if (nav_opened === false && nav_closed === false) {
    nav.classList.add("show-navigation");

    //will insure that only one class will be active (either hide or show)
  } else if (nav_opened === true) {
    nav.classList.add("hide-navigation");
    nav.classList.remove("show-navigation");

    // apply disappear animation to each nav option
    navOptions.forEach((option) => {
      option.classList.remove("appear");
      option.classList.add("disappear");
    });
  } else {
    nav.classList.remove("hide-navigation");
    nav.classList.add("show-navigation");

    navOptions.forEach((option) => {
      option.classList.remove("disappear");
      option.classList.add("appear");
    });
  }
});
