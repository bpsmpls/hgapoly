function isValid(){
	var password = document.getElementById('password').value;
	if (password == "rawr") {
		// alert('Correct!')
		//window.location.href = "http://hgapoly.test/home";
	} else {
		alert('Sorry, that is the wrong password.');
		event.preventDefault();
	}
}