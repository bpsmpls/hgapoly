// WHO
(function ($) {

	// Swap content from element to dynamic area when triggered
	function contentSwap(trigger) {
		let content = trigger.find('.info-block').html();
		$('#dynamic-content').html(content);
	}

	$(document).ready(function() {
		$('.bubble').mouseenter(function() {
			contentSwap($(this));
		});
	});
}(jQuery));
