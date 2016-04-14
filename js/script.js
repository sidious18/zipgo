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
  //map-autocompliete
  var homeInput = [
    "Sony",
    "World",
    "Junction",
    "Koramangala",
    "Sony World",
    "World Junction",
    "Juncktion Koramangala"
  ];
  var workInput = [
    "Select",
    "Work",
    "Location",
    "Select Work",
    "Work Location",
    "Select Location",
    "Select work Location"
  ];

  $("#home-input").autocomplete({
    source: homeInput,
    appendTo: "#home-input-box"
  });

  $("#work-input").autocomplete({
    source: workInput,
    appendTo: "#work-input-box"
  });

  if($(".map-left-block-cover").length!=0){
    $(".map-left-block-cover").parent().css("overflow-y","hidden");
    $(".map-left-block").scrollTop(0);
  }
  //confirm trigger button
  $("#route-trigger").click(function(event) {
    var triggerBoofer = $(".confirm-route div:last-child").html();
    $(".confirm-route div:last-child").html($(".confirm-route div:first-child").html());
    $(".confirm-route div:first-child").html(triggerBoofer);
  });
});
