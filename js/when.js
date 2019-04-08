// WHEN
(function ($) {
	
	// Presupposes the inclusion of modal.js
	modalTrigger.click(function(e){
		e.preventDefault();

		launchModal($(this));
	});
	
}(jQuery));