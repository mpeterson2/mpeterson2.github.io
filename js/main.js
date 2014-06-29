$(document).ready(function() {
  // Not sure why the body's height is
  // sometimes a weird size when it loads.
  window.setTimeout(onResize, 100);
  $(window).resize(onResize);
})

function onResize() {
  var bHeight = $("body").height();
  var lHeight = $("#links").height();
  $("html").css("height", "calc(" + bHeight + "px + " + lHeight + "px)");
}