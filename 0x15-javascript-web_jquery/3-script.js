// when the document is ready
$(document).ready(function() {

// When the <div id="red_header"> element is clicked
	$('div#red_header').on('click', function() {

// Add the class 'red' to the <header> element 
// This will change the text color to red

		$('header').addClass('red');
	});
});
