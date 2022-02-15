export default () => {
  const forceSplash = false;

  const splashScreen = localStorage.getItem("splash")
    ? localStorage.getItem("splash")
    : "disabled";

  const prod = process.env.production === "true";
  const splashDisabled = splashScreen === "disabled";
  const splashDoneTiming = !forceSplash && (prod || splashDisabled) ? 1100 : 3300;

  $("#portfolio-splash").css("animation-delay", `${splashDoneTiming}ms`);
  // $("#portfolio-splash").css("display", `none`);

  setTimeout(() => {
    $("#site").css("display", "block");
  }, splashDoneTiming + 500);

  localStorage.setItem("splash", "disabled");

  // console.log($(".blob")[0].getTotalLength());
};
