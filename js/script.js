jQuery(document).ready(function($) {
  $( "#company-city" ).selectmenu();
  //background for history-page
  if ($(".my-rides-box .ride-box").length > 1){
    var position = "background-position: " + "7px " + $(".my-rides-box .ride-box:first-child").outerHeight()/2+"px; "
    var size = "background-size: " + "2px " + ($(".my-rides-box").outerHeight() - $(".my-rides-box .ride-box:last-child").outerHeight()/2 - $(".my-rides-box .ride-box:first-child").outerHeight()/2)+"px";
    $(".my-rides-box").attr("style", position + size);
  }
  else{
    $(".my-rides-box").css("background", "none");
  }

});
