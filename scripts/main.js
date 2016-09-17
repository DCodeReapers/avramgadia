$(document).ready(function() {
	// $(".smoothscroll").anchorAnimate();


	// $('.gallery-pic').hover(
	// 	function(){ $(this).find('.caption').show(400) },
	// 	function(){ $(this).find('.caption').hide(400) }
	// );

	// $("#myModal").modal({backdrop: true}); // Pop Up Window
	
	// For Different Header Include
	$(".include-header").load("pages/important/header.html");
	$(".include-footer").load("pages/important/footer.html");

	// for Spy Navbar
    // $('body').scrollspy({target: ".navbar", offset: 150});   

    // document.getElementsByClassName("frontpic")[0].style.height = window.innerHeight + "px";
});




// jQuery.fn.anchorAnimate = function(settings) {
// 	settings = jQuery.extend({
// 	speed : 700
// 	}, settings);	

// 	return this.each(function(){
// 		var caller = this
// 		$(caller).click(function (event) {	
// 			event.preventDefault()
// 			var locationHref = window.location.href
// 			var elementClick = $(caller).attr("href");
// 			var destination = $(elementClick).offset().top;
// 			$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
// 				window.location.hash = elementClick
// 			});
// 	  	return false;
// 		})
// 	})
// };