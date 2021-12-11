/* ( function( $ ) {

	"use strict";

  $(".card").tilt({
    maxTilt: 15,
    perspective: 1400,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 1200,
    glare: true,
    maxGlare: 0.2,
    scale: 1.06
  });
  
}( jQuery ) ); */

window.onscroll = myFunction;

function myFunction(e) {
  if (document.scrollingElement.scrollTop > 1000) {
    document.getElementById("animated-box").className += " fly";
    document.getElementById("animated-box-fire").className += " fly_fire";
  }
}

if (document.body.clientWidth < 800) {
  document.getElementsByClassName('text_right')[0].style.display = "none"
}

