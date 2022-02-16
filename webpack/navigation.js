export default () => {
  const navButtonNames = [
    "navigation-home",
    "navigation-about",
    "navigation-experiences",
    "navigation-projects",
  ];

  const clearCurrentFromAllNav = () => {
    navButtonNames.forEach((navButtonName) => {
      const currentTarget = document.getElementById(navButtonName);

      if (currentTarget.classList.contains('current')) 
        currentTarget.classList.remove('current');
    });
  };

  navButtonNames.forEach((navButtonName) => {
    $(`#${navButtonName}`).on("click", (event) => {
      event.preventDefault();
      clearCurrentFromAllNav();

      window.scroll({
        behavior: "smooth",
        left: 0,
        top: $(`#${navButtonName.split("-")[1]}`).offset().top - 64,
      });
      document.getElementById(navButtonName).classList.add('current');
    });
  });
};
