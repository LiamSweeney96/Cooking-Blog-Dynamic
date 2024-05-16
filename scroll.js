
$(document).ready(function() {
  $("#jump").click(function() {
    document.querySelector('img').scrollIntoView({
      behavior: 'smooth'
    });
});
});