// Wait for the document to be ready
$(document).ready(function() 
{

// Attach a click event handler to the div element with the ID "red_header"
    $('div#red_header').click(function() 
    {

// Select the header element and set its text color to red
	    $('header').css('color', '#FF0000');
    }
}
