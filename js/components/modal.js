// Modals
// ----------------------------------------

const body         = $('body');
const modal        = $('#modal');
const modalTrigger = $('[data-modal]');
// const modalWrapper = $('.modal-wrapper');
const modalContent = $('.modal-content');

function closeModal() {
	//modalWrapper.removeClass('active');
	body.removeClass('modal-open');
}
function openModal(target) {
	//target.addClass('active');
	body.addClass('modal-open');
}

$('.modal-screen, .close-modal').click(function(){
	closeModal();
});

$(document).keyup(function(e) {
	if (e.keyCode === 27) closeModal();
});

function launchModal(trigger, callback) {
	let href        = trigger.attr('href');
	let location    = trigger.data('location');
	let partialName = href.replace('#','');

	// Dyamically load content from the /_partials folder
	modalContent.load('_partials/' + location + '/' + partialName, function(){
		openModal(modal);

		// On successful load, run any callbacks to prevent dynamic loading issues
		if (callback !== null) {
			callback();
		}
	});
}
