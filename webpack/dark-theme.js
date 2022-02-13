export default () => {
  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );

  // Get previous setting
  // const currentTheme = localStorage.getItem("theme")
  //   ? localStorage.getItem("theme")
  //   : null;
  //
  // if (currentTheme) {
  //   document.documentElement.setAttribute("data-theme", currentTheme);
  //
  //   if (currentTheme === "dark") {
  //     toggleSwitch.checked = true;
  //   }
  // }

  // // Auto Night mode at night time
  // const d = new Date();
  // const hours = d.getHours();
  // const nightTime = hours >= 19 || hours <= 7; // between 7pm and 7am
  // if (nightTime) {
  //   input.checked = true;
  //   body.classList.add("night");
  // }

  const switchTheme = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };

  toggleSwitch.addEventListener("change", switchTheme, false);

  // const body = document.querySelector("body");
  // const toggle = document.getElementById("toggle");
  // const input = document.getElementById("switch");

  // // Night mode toggle
  // toggle.addEventListener("click", function () {
  //   const isChecked = input.checked;
  //   if (isChecked) {
  //     body.classList.remove("night");
  //   } else {
  //     body.classList.add("night");
  //   }
  // });
};
