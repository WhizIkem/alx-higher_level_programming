// Wait for the DOM to be fully loaded
$(document).ready(function() {

	// Fetch and print the translation when clicking on #btn_translate
	$("#btn_translate").click(fetchTranslation);

	// Fetch and print the translation when pressing Enter on #language_code
	$("#language_code").keypress(function(event) {
		if (event.which === 13) {
			fetchTranslation();
		}
	});

	// Function to fetch and print the translation
	function fetchTranslation() {

		// Get the language code entered by the user
		let languageCode = $("#language_code").val();

		// Make the AJAX request to fetch the translation
		$.getJSON(`https://www.fourtonfish.com/hellosalut/hello/${languageCode}`, function(data) {

			// Get the translation of "Hello" from the response
			let translation = data.hello;

			// Set the translation as the content of the #hello element
			$("#hello").text(translation);
			});
	}
});
