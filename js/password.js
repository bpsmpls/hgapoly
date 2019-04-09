const setPassword = 'intuitive';
const homepageUrl = 'home';

// Setting the cookie for capture
function setCookie(cname, cvalue, time) {
	var d = new Date();
	//d.setTime(d.getTime() + (time*24*60*60*1000)); // set to a day
	d.setTime(d.getTime() + (time*60*60*1000)); // set to one hour
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

// Get the cookie
function getCookie(name) {
	var nameEQ = name + "=";
	var ca     = document.cookie.split(';');
	for ( var i=0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(nameEQ) != -1) return c.substring(nameEQ.length,c.length);
	}
	return null;
} 

// Check for cookie on page load
window.onload = function() {
	if (getCookie('hgapoly') == 'seen') { 
		window.location.href = homepageUrl;
	}
};

// Check password validity on form submit, set cookie
function isValid(){
	let enteredPassword = document.getElementById('password').value;
	if (enteredPassword == setPassword) {
		// alert('Correct!')
		setCookie('hgapoly', 'seen', 1); 
	} else {
		alert('Sorry, that is the wrong password.');
		event.preventDefault();
	}
}