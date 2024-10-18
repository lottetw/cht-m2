(function () {
  "use strict";

  AOS.init({
    duration: 800,
    easing: "slide",
    once: true,
  });

  var preloader = function () {
    var loader = document.querySelector(".loader");
    var overlay = document.getElementById("overlayer");

    function fadeOut(el) {
      el.style.opacity = 1;
      (function fade() {
        if ((el.style.opacity -= 0.1) < 0) {
          el.style.display = "none";
        } else {
          requestAnimationFrame(fade);
        }
      })();
    }

    setTimeout(function () {
      fadeOut(loader);
      fadeOut(overlay);
    }, 200);
  };
  preloader();

  var tinyslider = function () {
    var postSlider = document.querySelectorAll(".post-slider"); // 教學文件

    // 教學文件
    if (postSlider.length > 0) {
      var tnsPostSlider = tns({
        container: ".post-slider",
        mode: "carousel",
        speed: 700,
        items: 4,
        // center: true,
        gutter: 30,
        loop: true,
        edgePadding: 10,
        controlsPosition: "bottom",
        navPosition: "bottom",
        nav: true,
        autoplay: false,
        autoplayButtonOutput: false,
        controlsContainer: "#post-slider-nav",
        responsive: {
          0: {
            items: 1,
          },
          700: {
            items: 2,
          },
          900: {
            items: 4,
          },
        },
      });
    }
  };
  tinyslider();

  var lightboxVideo = GLightbox({
    selector: ".glightbox",
  });
})();

$(document).ready(function () {
  $(".jsGoTop").on("click", function (e) {
    $("html, body").animate({ scrollTop: 0 }, 100);
  });
}); //document ready
