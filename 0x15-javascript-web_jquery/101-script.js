// Wait for the DOM to be fully loaded
$(document).ready(function() {
	// Add item to the list when clicking on DIV#add_item
	$("#add_item").click(function() {

		// Create a new <li> element with the text "Item"
		let newItem = $("<li>").text("Item");

		// Append the new <li> element to UL.my_list
		$(".my_list").append(newItem);
	});

	// Remove last item from the list when clicking on DIV#remove_item
	$("#remove_item").click(function() {

		// Select the last <li> element in UL.my_list and remove it
		$(".my_list li:last-child").remove();
	});

	// Clear the list when clicking on DIV#clear_list
	$("#clear_list").click(function() {

		// Remove all <li> elements from UL.my_list
		$(".my_list").empty();
	});
});
