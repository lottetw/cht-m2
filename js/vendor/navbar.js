(function () {
  "use strict";

  var siteMenu = function () {
    // Click js-menu-toggle
    var menuToggle = document.querySelectorAll(".js-menu-toggle");
    var mTog;
    menuToggle.forEach((mtoggle) => {
      mTog = mtoggle;
      mtoggle.addEventListener("click", (e) => {
        if (document.body.classList.contains("offcanvas-menu")) {
          document.body.classList.remove("offcanvas-menu");
          mtoggle.classList.remove("active");
          mTog.classList.remove("active");
        } else {
          document.body.classList.add("offcanvas-menu");
          mtoggle.classList.add("active");
          mTog.classList.add("active");
        }
      });
    });

    var specifiedElement = document.querySelector(".js-site-mobile-menu");
    var mt, mtoggleTemp;
    document.addEventListener("click", function (event) {
      var isClickInside = specifiedElement.contains(event.target);
      menuToggle.forEach((mtoggle) => {
        mtoggleTemp = mtoggle;
        mt = mtoggle.contains(event.target);
      });

      if (!isClickInside && !mt) {
        if (document.body.classList.contains("offcanvas-menu")) {
          document.body.classList.remove("offcanvas-menu");
          mtoggleTemp.classList.remove("active");
        }
      }
    });
  };
  siteMenu();
})();
