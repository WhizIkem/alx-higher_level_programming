// Wait for the document to be fully loaded
$(document).ready(function() {

// attach a click event handler to the element with id "toggle_header"
	$('div#toggle_header').click(function() {

// Toggle the classes "red" and "green" on the <header> element
		$('header').toggleClass('red green');
	});
});
