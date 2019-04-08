// HOW
(function ($) {
	
	// Presupposes the inclusion of both modal.js and glide.js
	modalTrigger.click(function(e){
		e.preventDefault();

		launchModal($(this), function(){
			let glide = new Glide('.glide');
			glide.mount();
		});
	});
	
}(jQuery));