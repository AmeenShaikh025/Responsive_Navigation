/*first way(standard way)*/

$('.menu-toggle').click(function(){

					/*toggleClass means we are adding or removing class*/
	$('.site-nav').toggleClass('site-nav--open', 500); /*jQuery UI gives us duration: i.e,500 for animation to toggle*/
	
	/*code for cancel mark(x) begins*/
	$(this).toggleClass('open');/*using this we are selecting menu-toggle*/

})