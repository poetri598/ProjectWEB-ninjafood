const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

const navlinks = document.querySelectorAll(".navlink");

navlinks.forEach((link) => {
  link.addEventListener("click", () => {
    navlinks.forEach((el) => {
      el.classList.remove("border-primary");
      el.classList.add("border-white");
    });

    link.classList.add("border-primary");
    link.classList.remove("border-white");
  });
});

// const navlinks = document.querySelectorAll(".navlink");

// navlinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     navlinks.forEach((el) => el.classList.replace("border-primary", "border-white"));
//     link.classList.replace("border-white", "border-primary");
//   });
// });
