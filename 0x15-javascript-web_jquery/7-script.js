// Wait for the document to be fully loaded
 $(document).ready(function() {
	 // Make an AJAX GET request to fetch the character data
	 $.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', function(data) {
		 //Extract the character name from the response data
		 let characterName = data.name;
		 // Display the character name in the <div id="character"> element
		 $('#character').text(characterName);
	});
});
