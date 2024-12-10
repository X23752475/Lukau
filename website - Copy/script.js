// Function to validate the contact form input
function validateForm() {
    // Retrieve the values of form inputs by their IDs
    var name = document.getElementById("name").value; // Gets the value entered in the "Name" field
    var email = document.getElementById("email").value; // Gets the value entered in the "Email" field
    var topic = document.getElementById("topic").value; // Gets the selected value in the "Topic" dropdown
    var message = document.getElementById("message").value; // Gets the text entered in the "Message" textarea

    // Check if any of the fields are empty
    if (name == "" || email == "" || topic == "" || message == "") {
        alert("All fields must be filled out"); // Alert the user if any field is blank
        return false; // Stops the form submission
    }

    // Regular expression to validate the email format
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    if (!email.match(emailPattern)) { // Check if the email does not match the pattern
        alert("Please enter a valid email address"); // Alert the user about invalid email
        return false; // Stops the form submission
    }

    // If all validations pass, return true to allow the form submission
    return true;
}
