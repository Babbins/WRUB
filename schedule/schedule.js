$(document).ready(function() {
  function isEmpty( el ){
     return !$.trim(el.html())
  }

  $( "td" ).mouseover(function() {
    $(this).addClass('hover');
    $(this).parent().find('td:first').addClass('hover');
    if($(this).attr('rowspan')>=2){
      $(this).closest('tr').next().find('td:first').addClass('hover');
    }
    if($(this).attr('rowspan')>=3){
      $(this).closest('tr').next().next().find('td:first').addClass('hover');
    }
    if($(this).attr('rowspan')>=4){
      $(this).closest('tr').next().next().next().find('td:first').addClass('hover');
    }
  });

  $( "td" ).mouseout(function() {
  $(this).removeClass('hover');
  $(this).css('cursor', 'default');
  $(this).parent().find('td:first').removeClass('hover');
  if($(this).attr('rowspan')>=2){
    $(this).closest('tr').next().find('td:first').removeClass('hover');
  }
  if($(this).attr('rowspan')>=3){
    $(this).closest('tr').next().next().find('td:first').removeClass('hover');
  }
  if($(this).attr('rowspan')>=4){
    $(this).closest('tr').next().next().next().find('td:first').removeClass('hover');
  }
  });
});
