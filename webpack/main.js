import darkTheme from "./dark-theme";
import navigation from "./navigation";
import portfolioSplash from "./portfolio-splash";

// Alternative to: document.addEventListener("DOMContentLoaded", function(event) {});
$("document").ready(main);

function main() {
  // const domain = "https://wksoh.com/"
  // const currentUrl = window.location.href;
  
  // darkTheme();
  portfolioSplash();
  navigation();

  // HANDLE BROKEN IMAGES
  document.querySelectorAll("img").forEach(function (img) {
    img.onerror = function () {
      this.style.display = "none";
    };
  });

  // SCROLL DOWN HINT ARROW
  // const arrows = document.querySelector(".arrows");
  // setTimeout(function () {
  //   if (window.scrollY < 300) {
  //     arrows.style.display = "block";
  //   } else {
  //     console.log("Scroll down arrow hint skipped.");
  //   }
  // }, 3000);


  // if (!(
  //   currentUrl === domain || 
  //   currentUrl === "http://localhost:4000/"
  // )) return;
}
