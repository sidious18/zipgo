jQuery(document).ready(function($) {
  $( "#company-city" ).selectmenu();
  //background for history-page

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

  function setSelectionRange(input, selectionStart, selectionEnd) {
    if (input.setSelectionRange) {
      input.focus();
      input.setSelectionRange(selectionStart, selectionEnd);
    }
    else if (input.createTextRange) {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveEnd('character', selectionEnd);
      range.moveStart('character', selectionStart);
      range.select();
    }
  }
  function setCaretToPos (input, pos) {
    setSelectionRange(input, pos, pos);
  };

window.onload = function(){
  if ($(".my-rides-box .ride-box").length > 1){
    var position = "background-position: " + "7px " + $(".my-rides-box .ride-box:first-child").outerHeight(true)/2+"px; ";
    var size = "background-size: " + "2px " + (5 + $(".my-rides-box").outerHeight(true)
      - $(".my-rides-box .ride-box:last-child").outerHeight(true)/2 
      - $(".my-rides-box .ride-box:first-child").outerHeight(true)/2)+"px";
    $(".my-rides-box").attr("style", position + size);
  }
  else{
    $(".my-rides-box").css("background", "none");
    $(".ride-box").css("background", "none");
  }
  if(screen.width<768){
    $(".my-rides-box").css("background", "none");
    $(".ride-box").css("background", "none");
  }
  $(".form-control").click(function(){
    var ifZipGo = $(".form-control").val().slice(-9);
    if(ifZipGo!= "@zipgo.in"){
      $(".form-control").val($(".form-control").val()+"@zipgo.in");
      setCaretToPos($(".form-control")[0], 0);
    };
  });
};