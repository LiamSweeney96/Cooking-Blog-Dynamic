
$(document).ready(function() {
  $("iframe").hover(function() {
    $(this).css("width", "825");
    $(this).css("height", "750");
  }, function() {
      $(this).css("width", "500");
      $(this).css("height", "425");
  });
});