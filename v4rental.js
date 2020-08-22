/********************************************************************/
// v4rental.js
//
// This codes purpose is a rental company, where people can hire out
// a vehicle.
// Written by Callum Watson term 3 2020
// v1: Version 1 is a base alert program for my rental company.
// v2: Version 2 has added validation.
// v3: Version 3 has added extra content.
// v4: Version 4 is a web based version.
//
/********************************************************************/

//<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>


// Constants
const form = document.getElementById('nameform'); // Getting the name form from html.
const firstname = document.getElementById('firstname'); // Getting the users first name input.
const lastname = document.getElementById('lastname'); // Getting the users last name input.
const nameRegex =  /^[A-Z][a-z0-9_-]{1,19}$/; // The name regex.
const userAge = document.getElementById('userage') // Getting the users age input.
const maxAge = 90; // Max age available to rent.
const minAge = 18; // Min age required to rent.
const ageForm = document.getElementById('ageForm') // Getting the age form from html.

// Variables
var validFirstName = false; // Valid first name
var validLastName = false; // Valid last name
var validName = false; // Valid Name
var validAge = false; // Valid Age

// Vehicle Tables

var example = {
	name: "Test",
	carCategory: "Test",
	carDoors: 4,
	rentPrice: 1
}

// Array of vehicles

const rentVehicles = [example]

/********************************************************************/
// Start Rental Function
// Purpose is the starting button of the page.
/********************************************************************/
function startRental(){
	var rentInfo = document.getElementById("rentStart"); // Getting the id from html.

	$("#rentStart").fadeOut(400, function(){}); // Fading the box out.

	var backgroundImage = $('#imageBackground') // Background image variable for fadeouts.
	var backgroundImgId = document.getElementById('imageBackground'); // Background image Id

	backgroundImage.fadeOut(1000, function(){ // Background image fade out.
		backgroundImgId.src = 'nameimage.jpg' // Changing image src to new one
		backgroundImage.fadeIn(1000); // fading that image back in
	})

	setTimeout(function(){
			$("#nameinfo").fadeIn(500, function(){}); // fading name conten in
	}, 1500); // Waiting for a certain of time before fading.
};

/********************************************************************/
// Form Name Complete
// Purpose is what takes place once the form is complete for the name.
/********************************************************************/
function nameFormComplete(){
	var nameInfo = document.getElementById("nameinfo"); // Getting the name info id

	$("#nameinfo").fadeOut(500, function(){}); // Fading the name box

	var backgroundImage = $('#imageBackground') // Background image variable fades.
	var backgroundImgId = document.getElementById('imageBackground'); // Background image id

	backgroundImage.fadeOut(1000, function(){
		backgroundImgId.src = 'background.jpg' // Background image new src
		backgroundImage.fadeIn(1000); // background image fade back in
	})

	document.getElementById('ageMSG').innerHTML = firstname.value + ", What's your age?"; // Setting users first name + displaying

	setTimeout(function(){
		$("#ageInfo").fadeIn(500, function(){}); // Fading age info in.
	}, 1500); // Delaying this content fade.
}

/********************************************************************/
// Age Form Complete
// Purpose is what takes place once the form is complete for the age.
/********************************************************************/
function ageFormComplete(){
	var ageInfo = document.getElementById("ageInfo"); // Getting the age info from html.

	$("#ageInfo").fadeOut(500, function(){}); // Fading the age info out.

	var backgroundImage = $('#imageBackground') // Background variable for fades
	var backgroundImgId = document.getElementById('imageBackground'); // Background image from html

	backgroundImage.fadeOut(1000, function(){ // fading background image out
		backgroundImgId.src = 'background.jpg' // changing background image to new src.
		backgroundImage.fadeIn(1000); // Fading new image in
	})

	//setTimeout(function(){
	//	$("#ageInfo").fadeIn(500, function(){});
	//}, 1500);
}

form.addEventListener('submit', e => { // Listening for event.
	e.preventDefault();

	validateNameInputs(); // Running validate function for name
	while (validLastName == true && validFirstName === true) { // Looping to check for valid name
		validName = true; // Setting Valid Name to true
		break; // Breaking the loop
	}

	if(validName == true){ // Checking valid name is true
		nameFormComplete(); // running complete form function
	}
});

ageForm.addEventListener('submit', e => { // Listening for event.
	e.preventDefault();

	validateAgeInputs(); // Runnning validate age function.

	if(validAge == true){ // Checking age is valid
		ageFormComplete(); // Running complete function if age is valid
	}
});

/********************************************************************/
// Validating Name Inputs
// Purpose is to validate the names that are inputted.
/********************************************************************/
function validateNameInputs() {

	const firstnameValue = firstname.value.trim(); // Making new const and trimming any spaces
	const lastnameValue = lastname.value.trim(); // Making new const and trimming any spaces

  if(!nameRegex.test(firstnameValue)){ // Using regex to check first name is valid
    setErrorFor(firstname, 'Invalid First Name') // Setting error message if above is false
		validFirstName = false; // Making sure name isn't valid.
  } else {
    setSuccessFor(firstname) // Setting success if above is true
		validFirstName = true // Setting the first name to valid
  }

  if(!nameRegex.test(lastnameValue)){ // Checking Name is valid to regex.
    setErrorFor(lastname, 'Invalid Last Name') // Sending error message if name isn't valid.
		validLastName = false; // Making sure name isn't valid if returns false.
  } else {
    setSuccessFor(lastname) // Setting success if name is valid
		validLastName = true; // Setting the last name to valid
  }
}

/********************************************************************/
// Validating Age inputs
// Purpose is to validate the age inputs.
/********************************************************************/
function validateAgeInputs(){ // Validating the age Inputs

	const ageValue = userAge.value.trim(); // trimming any spaces off the end

	if(ageValue < minAge || ageValue > maxAge){ // Checking the age is within range.
		setErrorFor(userAge, 'Your either too young/old.') // Sending error message.
		validAge = false; // Making sure age isn't valid
	} else {
		setSuccessFor(userAge) // Sending success message
		validAge = true; // Making age valid
	}
}

/********************************************************************/
// Error function
// Purpose is to run a error message/symbol to the user if something is wrong.
/********************************************************************/
function setErrorFor(input, message) { // Sending error message function
	const textbox = input.parentElement; // Getting the parent element of the input.
	const small = textbox.querySelector('small'); // looking for the small element
	textbox.className = 'textbox error'; // Setting the class name to error
	small.innerText = message; // adding the message to the text
}

/********************************************************************/
// Success Function
// Purpose is show that the input is right.
/********************************************************************/
function setSuccessFor(input) {
	const textbox = input.parentElement; // Getting the parent element of input
	textbox.className = 'textbox success'; // Adding success to the class
}

/********************************************************************/
//    END OF PROGRAM
/********************************************************************/
