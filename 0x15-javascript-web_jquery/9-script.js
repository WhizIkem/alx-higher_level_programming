// Wait for the DOM to be fully loaded
$(document).ready(function() {

	// Make the AJAX request to fetch the translation
	$.getJSON("https://fourtonfish.com/hellosalut/?lang=fr", function(data) {

		// Get the translation of "hello" from the response
		let translation = data.hello;

		// Set the translation as the content of the <div id="hello"> element
		$("#hello").text(translation);
	});
});
