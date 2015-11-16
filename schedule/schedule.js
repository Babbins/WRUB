$(document).ready(function() {
  $( "td" ).mouseover(function() {
    $(this).addClass('hover');
  });
  $( "td" ).mouseout(function() {
    $(this).removeClass('hover');
  });
});
