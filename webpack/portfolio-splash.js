import scrollReveal from "./scroll-reveal";

export default () => {
  const forceSplash = false;

  const splashScreen = sessionStorage.getItem("splash")
    ? sessionStorage.getItem("splash")
    : "enabled";

  const prod = process.env.production === "true";
  const splashDisabled = splashScreen === "disabled";
  const splashDoneTiming = forceSplash
    ? 3000
    : !prod || splashDisabled
    ? 1100
    : 3000;
  
  $("#portfolio-splash").css("animation-delay", `${splashDoneTiming}ms`);
  // $("#portfolio-splash").css("display", `none`);

  setTimeout(() => {
    $("#site").css("display", "block");
    scrollReveal();
  }, splashDoneTiming + 500);

  sessionStorage.setItem("splash", "disabled");

  // console.log($(".blob")[0].getTotalLength());
};
