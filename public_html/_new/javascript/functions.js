/* Declare a namespace for the site */
var Site = window.Site || {};

/* Create a closure to maintain scope of the '$'
   and remain compatible with other frameworks.  */
(function($) {
	
	//same as $(document).ready();
	$(function() {
		
		

	});


	$(window).bind("load", function() {
		
		
	
	});
	
})(jQuery);

function loadStaticContent(){
	// local
    //$("nav").load("./content/nav.html");
	$("section.header").load("./content/header.html");
	$("footer").load("./content/footer.html #content");
	
	// remote
    //$("nav").load("/content/nav.html");
	//$("header").load("/content/header.html");
	//$("footer").load("/content/footer.html");
 }