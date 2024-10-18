export function activeCurrentLink(activeId) {
  $(".jsGoAnchor").removeClass("active");
  $('[data-link="' + activeId + '"]').addClass("active");
  var val = $('[data-link="' + activeId + '"]').attr("value");
  if (typeof val !== typeof undefined && val !== false) {
    $("#jsMobileStatus").text(val);
  }
}
// export { activeCurrentLink };
