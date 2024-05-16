
$(document).ready(function() {
  $("#pic").hover(function() {
    $(this).css("width", "825");
    $(this).css("height", "750");
  }, function() {
      $(this).css("width", "700");
      $(this).css("height", "575");
  });
});