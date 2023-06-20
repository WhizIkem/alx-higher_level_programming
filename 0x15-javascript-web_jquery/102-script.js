// Wait for the DOM to be fully loaded
$(document).ready(function() {

	// Fetch and print the translation when clicking on INPUT#btn_translate
	$("#btn_translate").click(function() {

		// Get the language code entered by the user
		let languageCode = $("#language_code").val();

		// Make the AJAX request to fetch the translation
		$.getJSON(`https://www.fourtonfish.com/hellosalut/hello/${languageCode}`, function(data) {

			// Get the translation of "Hello" from the response
			let translation = data.hello;
			// Set the translation as the content of the <div id="hello"> element
			$("#hello").text(translation);
			});
	});
});
