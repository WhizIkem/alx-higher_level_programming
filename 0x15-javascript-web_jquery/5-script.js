// Wait for the document to be fully loaded
$(document).ready(function() {

// Attach a click event handler to the element with id "add_item"
	$('div#add_item').click(function() {

		// Create a new <li> element with the text "Item"
		const newItem = $('<li>').text('Item');
		
		// Append the new <li> element to the <ul> element with class "my_list"
		$('ul.my_list').append(newItem);
	});
});
