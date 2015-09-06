$(document).ready(function(){
	$(".opcionPrincipal").on("mouseout",function menuMouseLeft() {
   $(this).find("ul").addClass("oculto");
    
});
	$(".opcionPrincipal").on("mouseover",function menuMouseOver() {
  $(this).find("ul").removeClass("oculto");

});

});
