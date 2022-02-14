import darkTheme from "./dark-theme";
import portfolioSplash from "./portfolio-splash";
import scrollReveal from "./scroll-reveal";

// Alternative to: document.addEventListener("DOMContentLoaded", function(event) {});
$("document").ready(main);

function main() {
  const domain = "https://wksoh.com/"
  const currentUrl = window.location.href;
  
  // darkTheme();
  portfolioSplash();
  scrollReveal();

  // GO TO TOP BUTTON
  const goTopButton = document.getElementById("go-top-btn");
  // const $goTopButton = $("#go-top-btn");
  // const introHeight = document.querySelector(".intro").offsetHeight;

  // Show Go-Top-Button when scroll beyond first-page
  window.addEventListener(
    "scroll",
    function () {
      if (window.scrollY > 300) {
        // if (window.scrollY > introHeight * 0.8) {
        // goTopButton.style.display = 'block'; // $goTopButton.fadeIn();
        goTopButton.style.transform = "translateY(0px)";
      } else {
        // goTopButton.style.display = 'none'; // $goTopButton.fadeOut();
        goTopButton.style.transform = "translateY(100px)";
      }
    },
    false
  );

  // Click Go-Top-Button to go back up
  goTopButton.addEventListener("click", function () {
    // $("html, body").animate({ scrollTop: 0 }, 500);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // HANDLE BROKEN IMAGES
  document.querySelectorAll("img").forEach(function (img) {
    img.onerror = function () {
      this.style.display = "none";
    };
  });


  if (!(
    currentUrl === domain || 
    currentUrl === "http://localhost:4000/"
  )) return;

  // SCROLL DOWN HINT ARROW
  const arrows = document.querySelector(".arrows");
  setTimeout(function () {
    if (window.scrollY < 300) {
      arrows.style.display = "block";
    } else {
      console.log("Scroll down arrow hint skipped.");
    }
  }, 3000);

  // REPLACE fake email with real email after 10ms
  const fakeEmailAddr = "annoying.spammer83295@gmail.com";
  setTimeout(function() {
    $("a").html(function (_, html) {
      return html.replace(fakeEmailAddr, "ksoh@tuta.io");
    });
    document
      .querySelectorAll(`a[href="mailto:${fakeEmailAddr}"]`)
      .forEach(function (a) {
        a.setAttribute("href", "mailto:ksoh@tuta.io");
      });
  }, 10)

  // HAND WAVE ANIMATION
  const hand = document.querySelector(".emoji.wave-hand");

  function waveOnLoad() {
    hand.classList.add("wave");
    setTimeout(function () {
      hand.classList.remove("wave");
    }, 2000);
  }

  setTimeout(function () {
    waveOnLoad();
  }, 1000);

  hand.addEventListener("mouseover", function () {
    hand.classList.add("wave");
  });

  hand.addEventListener("mouseout", function () {
    hand.classList.remove("wave");
  });

  // SCROLL REVEAL
  window.sr = ScrollReveal({
    reset: false,
    duration: 600,
    easing: "cubic-bezier(.694,0,.335,1)",
    scale: 1,
    viewFactor: 0.3,
  });

  sr.reveal(".background");
  sr.reveal(".skills");
  sr.reveal(".experience", { viewFactor: 0.2 });
  sr.reveal(".featured-projects", { viewFactor: 0.1 });
  sr.reveal(".other-projects", { viewFactor: 0.05 });
}
