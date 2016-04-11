$(document).ready(function(){
	$(".index-footer-get").click(function(){
		$(".index-footer-content").hide();
		$(".contact-form").show();
	});
	$(".contact-form-submit").click(function(){
		$(".contact-form").hide();
		$(".index-footer-content").show();
	});
  $(".contact-form-shut").click(function(){
   	$(".contact-form").hide();
   	$(".contact-form-input").val("");
   	$(".contact-form-textarea").val("");
		$(".index-footer-content").show();
  });
  $( ".map-block-route-header-select" ).selectmenu({
    appendTo:".map-block-route-header",
    position: { my : "left top", at: "left bottom" }
  });
    var availableTags = [
    "Coffee Market",
    "Tea Shop",
    "Palace",
    "Casino",
    "Home"
  ];
  $( ".map-block-route-input input" ).autocomplete({
    source: availableTags,
    position: { my : "left top", at: "left bottom",of: ".map-block-route-header"},
    appendTo: ".map-block",
    select: function(event,ui){
     	$(this).val(ui.item.value);
     	$(this).autocomplete( "close" );
     	if($(".map-block-route-input input:first-child").val()=="Coffee Market" && $(".map-block-route-input input:nth-child(2)").val()=="Tea Shop"){
    		noRoutes();
    	}
    	else if ($(".map-block-route-input input:first-child").val()!="" && $(".map-block-route-input input:nth-child(2)").val()!=""){
    		showRoutes();
    	}	
    }
  });
  $('.map-block-route-input input').keyup(function(e){
   	if (e.keyCode == 13){
	    if($(".map-block-route-input input:first-child").val()=="Coffee Market" && $(".map-block-route-input input:nth-child(2)").val()=="Tea Shop")
	    {
	        noRoutes();
	    }
	    else if ($(".map-block-route-input input:first-child").val()!="" && $(".map-block-route-input input:nth-child(2)").val()!="")
	   	{
	   		showRoutes();
	   	}
     	$(this).autocomplete( "close" );	
    }
	});
  $(".map-block-variants-header > div:nth-child(2)").click(function(){
    $(".map-block-variants").hide();
  });
  $(".map-block-bottom-button").click(function(){
    if($("#from-2").is(":checked")&& $("#to-2").is(":checked")){
      $(".map-block-variants").hide();
      $(".map-notrips").show();
      createOverlay(".map-notrips");
    }
    else{
      $(".map-block-variants").show();
    }
  });
  $(".noroute-button").click(function(){
    $(".map-request-trips").show();
    createOverlay(".map-request-trips",".noroute-box");
  });
  $(".notrips-button").click(function(){
    $(".map-overlay").remove();
    $(".map-notrips").hide();
  });
  $(".request-button").click(function(){
    $(".map-overlay").remove();
    $(".map-request-trips").hide();
  });
	$(".change-route").click(function(){
		var value = $(".map-block-route-input input:first-child").val();
		$(".map-block-route-input input:first-child").val($(".map-block-route-input input:nth-child(2)").val());
		$(".map-block-route-input input:nth-child(2)").val(value);
	});
  $(".white-marker-button").click(function(){
    $(this).parent().remove();
  });
  $(".nav").on("click","a", function (event) {
    var id  = $(this).attr('href'),  
    top = $(id).offset().top;          
    $('body,html').animate({scrollTop: top}, 500);
  });
  function showRoutes(){
  	$(".map-block-isroute").show();
    $(".noroute-box").hide();
  }
  function noRoutes(){
    $(".map-block-variants").hide();     
  	$(".noroute-box").css("display","flex")
  	$(".map-block-isroute").hide();
  }
  function createOverlay(hide1,hide2){
    $(".map-block").append('<div style="z-index: 100;" class="ui-widget-overlay map-overlay"></div>')   
    $(".map-overlay").click(function(){
      $(this).remove();
      $(hide1).hide();
      $(hide2).hide();
    }); 
  }   
  $(window).resize(function() {
    $(".map-block-route-input input").blur();
    $(".map-block-route-input input").autocomplete( "close" );
    $(".map-block-route-header-select").selectmenu( "close" );
  });
  $(".map-block-body").mCustomScrollbar();
  $(".map-block-variants-content").mCustomScrollbar();
});