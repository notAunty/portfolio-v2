(()=>{"use strict";$("document").ready((function(){var e=window.location.href,t=document.getElementById("go-top-btn");if(window.addEventListener("scroll",(function(){window.scrollY>300?t.style.transform="translateY(0px)":t.style.transform="translateY(100px)"}),!1),t.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),document.querySelectorAll("img").forEach((function(e){e.onerror=function(){this.style.display="none"}})),"https://wksoh.com/"===e||"http://localhost:4000/"===e){var o=document.querySelector(".arrows");setTimeout((function(){window.scrollY<300?o.style.display="block":console.log("Scroll down arrow hint skipped.")}),3e3);var r="annoying.spammer83295@gmail.com";setTimeout((function(){$("a").html((function(e,t){return t.replace(r,"ksoh@tuta.io")})),document.querySelectorAll('a[href="mailto:'.concat(r,'"]')).forEach((function(e){e.setAttribute("href","mailto:ksoh@tuta.io")}))}),10);var n=document.querySelector(".emoji.wave-hand");setTimeout((function(){n.classList.add("wave"),setTimeout((function(){n.classList.remove("wave")}),2e3)}),1e3),n.addEventListener("mouseover",(function(){n.classList.add("wave")})),n.addEventListener("mouseout",(function(){n.classList.remove("wave")})),window.sr=ScrollReveal({reset:!1,duration:600,easing:"cubic-bezier(.694,0,.335,1)",scale:1,viewFactor:.3}),sr.reveal(".background"),sr.reveal(".skills"),sr.reveal(".experience",{viewFactor:.2}),sr.reveal(".featured-projects",{viewFactor:.1}),sr.reveal(".other-projects",{viewFactor:.05})}}))})();