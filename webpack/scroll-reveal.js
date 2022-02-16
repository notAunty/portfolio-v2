export default () => {
  // SCROLL REVEAL
  window.sr = ScrollReveal({
    reset: false,
    duration: 600,
    easing: "cubic-bezier(.694,0,.335,1)",
    scale: 1,
    viewFactor: 0.3,
  });

  sr.reveal(".portfolio__background");
  sr.reveal(".skills");
  sr.reveal(".experience", { viewFactor: 0.2 });
  sr.reveal(".featured-projects", { viewFactor: 0.1 });
  sr.reveal(".other-projects", { viewFactor: 0.05 });
}