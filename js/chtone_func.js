import { activeCurrentLink } from "./module.js";

//捲動時 偵測左側選單 active 項目
$(document).scroll(function () {
  var scrollDistance = $(this).scrollTop();
  var topMenuOffset = 20;
  //選單項目 active
  if (scrollDistance > $("#chtone-func-1").offset().top - topMenuOffset && scrollDistance <= $("#chtone-func-2").offset().top - topMenuOffset) {
    activeCurrentLink("chtone-func-1");
  } else if (scrollDistance > $("#chtone-func-2").offset().top - topMenuOffset && scrollDistance <= $("#chtone-func-3").offset().top - topMenuOffset) {
    activeCurrentLink("chtone-func-2");
  } else if (scrollDistance > $("#chtone-func-3").offset().top - topMenuOffset && scrollDistance <= $("#chtone-func-4").offset().top - topMenuOffset) {
    activeCurrentLink("chtone-func-3");
  } else if (scrollDistance > $("#chtone-func-4").offset().top - topMenuOffset && scrollDistance <= $("#chtone-func-5").offset().top - topMenuOffset) {
    activeCurrentLink("chtone-func-4");
  } else if (scrollDistance > $("#chtone-func-5").offset().top - topMenuOffset && scrollDistance <= $("#chtone-func-6").offset().top - topMenuOffset) {
    activeCurrentLink("chtone-func-5");
  } else if (scrollDistance > $("#chtone-func-6").offset().top - topMenuOffset && scrollDistance <= $("#chtone-func-7").offset().top - topMenuOffset) {
    activeCurrentLink("chtone-func-6");
  } else if (scrollDistance > $("#chtone-func-7").offset().top - topMenuOffset) {
    activeCurrentLink("chtone-func-7");
  } else {
    $(".jsGoAnchor").removeClass("active");
  }
});
$("#jsMobileDropdown .jsGoAnchor").click(function () {
  var val = $(this).attr("value");
  $("#jsMobileStatus").text(val);
});
