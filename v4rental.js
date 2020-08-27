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


// Constants
const nameform = document.getElementById('nameform'); // Getting the name form from html.
const firstname = document.getElementById('firstname'); // Getting the users first name input.
const lastname = document.getElementById('lastname'); // Getting the users last name input.
const nameRegex =  /^[A-Z][a-z0-9_-]{1,19}$/; // The name regex.
const userAge = document.getElementById('userage'); // Getting the users age input.
const maxAge = 90; // Max age available to rent.
const minAge = 18; // Min age required to rent.
const ageForm = document.getElementById('ageForm'); // Getting the age form from html.
const rentalBasePrice = 8 // The Rentals base price.
const categoryForm = document.getElementById('categoryForm');
const categorySelect = document.getElementById('categories');
const doorForm = document.getElementById('doorForm');
const doorSelect = document.getElementById('doors');
const daysSelect = document.getElementById('days');


const daysForm = document.getElementById('daysForm');

// Variables
var validFirstName = false; // Valid first name
var validLastName = false; // Valid last name
var validName = false; // Valid Name
var validAge = false; // Valid Age
var userCategory;
var userDoors;
var selectedCar;
var userDays;
var clientUsername;

var backgroundImage = $('#imageBackground') // Background variable for fades
var backgroundImgId = document.getElementById('imageBackground'); // Background image from html

// Vehicle Tables

// Supercars
var mclarenP = {
	name: "Mclaren P1",
	carCategory: "Super",
	carDoors: 2,
	rentPrice: rentalBasePrice * 4
}

// Muscle
var dodgeChargerRT = {
	name: "Dodge Challenger R/T",
	carCategory: "Muscle",
	carDoors: 2,
	rentPrice: rentalBasePrice * 2.6
}

// SUV
var jeepWrangler = {
	name: "Jeep Wrangler JL 2-Door",
	carCategory: "SUV",
	carDoors: 2,
	rentPrice: rentalBasePrice * 1.6
}
var fordEscape = {
	name: "2020 Ford Escape",
	carCategory: "SUV",
	carDoors: 4,
	rentPrice: rentalBasePrice * 1.7
}

// Sedan
var hondaAccord = {
	name: "2020 Honda Accord",
	carCategory: "Sedan",
	carDoors: 4,
	rentPrice: rentalBasePrice * 1.5
}
var mazdaRX = {
	name: "2012 Mazda RX-8",
	carCategory: "Sedan",
	carDoors: 2,
	rentPrice: rentalBasePrice * 1.2
}

// Hatchback
var hondaTypeR = {
	name: "2020 Honda Civic Type R",
	carCategory: "Hatchback",
	carDoors: 4,
	rentPrice: rentalBasePrice * 2.2
}
var hyuandaiVelosterN = {
	name: "2020 Hyundai Veloster N",
	carCategory: "Hatchback",
	carDoors: 2,
	rentPrice: rentalBasePrice * 2.1
}

// Coupe
var fordMustang = {
	name: "2020 Ford Mustang",
	carCategory: "Coupe",
	carDoors: 2,
	rentPrice: rentalBasePrice * 2.8
}
var audiA = {
	name: "2018 Audi A5 Premium Plus",
	carCategory: "Coupe",
	carDoors: 4,
	rentPrice: rentalBasePrice * 2.6
}

// Compact
var kiaSoul = {
	name: "2018 Kia Soul",
	carCategory: "Compact",
	carDoors: 4,
	rentPrice: rentalBasePrice * 1.5
}
var fiatFive = {
	name: "2017 Fiat 500",
	carCategory: "Compact",
	carDoors: 2,
	rentPrice: rentalBasePrice * 1.1
}

// Sports
var mercadesAMG = {
	name: "Mercedes-AMG C63",
	carCategory: "Sports",
	carDoors: 4,
	rentPrice: rentalBasePrice * 3
}
var audiR = {
	name: "2019 Audi R8",
	carCategory: "Sports",
	carDoors: 2,
	rentPrice: rentalBasePrice * 3.2
}

// Convertible
var jaguarFTypeConv = {
	name: "2016 Jaguar F-Type Convertible",
	carCategory: "Convertible",
	carDoors: 2,
	rentPrice: rentalBasePrice * 2.7
}
var porschePanamera = {
	name: "2011 Porsche Panamera Cabrio",
	carCategory: "Convertible",
	carDoors: 4,
	rentPrice: rentalBasePrice * 2.4
}

// Van
var toyotaHiace = {
	name: "Toyota Hiace ZR Cargo Van",
	carCategory: "Van",
	carDoors: 2,
	rentPrice: rentalBasePrice * 2
}

// Luxury
var rollsroyceDawn = {
	name: "Rolls-Royce Dawn 2016",
	carCategory: "Luxury",
	carDoors: 2,
	rentPrice: rentalBasePrice * 6
}
var rollsroyceGhost = {
	name: "2012 Rolls-Royce Ghost",
	carCategory: "Luxury",
	carDoors: 4,
	rentPrice: rentalBasePrice * 6
}

// Ute
var fordUteFalcon = {
	name: "2015 Ford Falcon Ute",
	carCategory: "Ute",
	carDoors: 2,
	rentPrice: rentalBasePrice * 1.9
}
var fordRaptor = {
	name: "2019 Ford Range Raptor",
	carCategory: "Ute",
	carDoors: 4,
	rentPrice: rentalBasePrice * 2.1
}

// Pickup
var fordF = {
	name: "2020 Ford f-150",
	carCategory: "Pickup",
	carDoors: 4,
	rentPrice: rentalBasePrice * 2
}

// Array of vehicles

const rentVehicles = [
	mclarenP,
	dodgeChargerRT,
	jeepWrangler,
	fordEscape,
	hondaAccord,
	mazdaRX,
	hondaTypeR,
	hyuandaiVelosterN,
	fordMustang,
  audiA,
	kiaSoul,
	fiatFive,
	mercadesAMG,
	audiR,
	jaguarFTypeConv,
	porschePanamera,
	toyotaHiace,
	rollsroyceDawn,
	rollsroyceGhost,
	fordUteFalcon,
	fordRaptor,
]


/********************************************************************/
// Start Rental Function
// Purpose is the starting button of the page.
/********************************************************************/
function startRental(){
	var rentInfo = document.getElementById("rentStart"); // Getting the id from html.

	$("#rentStart").fadeOut(400, function(){}); // Fading the box out.

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

	backgroundImage.fadeOut(1000, function(){
		backgroundImgId.src = 'background.jpg' // Background image new src
		backgroundImage.fadeIn(1000); // background image fade back in
	})
	clientUsername = firstname.value +" "+ lastname.value
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

	backgroundImage.fadeOut(1000, function(){ // fading background image out
		backgroundImgId.src = 'background.jpg' // changing background image to new src.
		backgroundImage.fadeIn(1000); // Fading new image in
	})

	setTimeout(function(){
		$("#categoryInfo").fadeIn(500, function(){});
	}, 1500);
}

/********************************************************************/
// Category Form Complete
// Purpose is what takes place once the form is complete for the age.
/********************************************************************/
function categoryFormComplete(){
	var categoryInfo = document.getElementById("categoryInfo"); // Getting the age info from html.

	$("#categoryInfo").fadeOut(500, function(){}); // Fading the age info out.

	backgroundImage.fadeOut(1000, function(){ // fading background image out
		backgroundImgId.src = 'background.jpg' // changing background image to new src.
		backgroundImage.fadeIn(1000); // Fading new image in
	})

	var doorSelect = document.getElementById('doors')

	if ( userCategory == "Super" || userCategory == "Van" ){
		for (var i=0; i<doorSelect.length; i++) {
	  	if (doorSelect.options[i].value == 4)
	    doorSelect.remove(i);
		}
	}

	setTimeout(function(){
		$("#doorInfo").fadeIn(500, function(){});
	}, 1500);
}

/********************************************************************/
// Door Form Complete
// Purpose is what takes place once the form is complete for the age.
/********************************************************************/
function doorFormComplete(){

	var doorInfo = document.getElementById("categoryInfo"); // Getting the age info from html.

	$("#doorInfo").fadeOut(500, function(){}); // Fading the age info out.

	selectCar()

	console.log(selectedCar)

	backgroundImage.fadeOut(1000, function(){ // fading background image out
		backgroundImgId.src = 'background.jpg' // changing background image to new src.
		backgroundImage.fadeIn(1000); // Fading new image in
	})

	var displaycarInfo = document.getElementById("displaycarInfo");
	document.getElementById('carInfoMSG').innerHTML = firstname.value + ", We have chosen you a car! It is the "+ selectedCar.name;
	document.getElementById('carPriceMSG').innerHTML = "It will cost you $"+ selectedCar.rentPrice.toFixed(2) +" per hour."
	setTimeout(function(){
		$("#displaycarInfo").fadeIn(500, function(){});
	}, 1500);
}

function displayCarDays(){
	var displayCarInfo = document.getElementById("displaycarInfo"); // Getting the age info from html.

	$("#displaycarInfo").fadeOut(500, function(){}); // Fading the age info out.

	backgroundImage.fadeOut(1000, function(){ // fading background image out
		backgroundImgId.src = 'background.jpg' // changing background image to new src.
		backgroundImage.fadeIn(1000); // Fading new image in
	})

	var daysInfo = document.getElementById("daysInfo");
	setTimeout(function(){
		$("#daysInfo").fadeIn(500, function(){});
	}, 1500);

}

function daysFormComplete(){
	var daysInfo = document.getElementById("daysInfo"); // Getting the age info from html.

	$("#daysInfo").fadeOut(500, function(){}); // Fading the age info out.

	backgroundImage.fadeOut(1000, function(){ // fading background image out
		backgroundImgId.src = 'background.jpg' // changing background image to new src.
		backgroundImage.fadeIn(1000); // Fading new image in
	})

	var recieptInfo = document.getElementById("receiptInfo");
	setTimeout(function(){
		$("#receiptInfo").fadeIn(500, function(){});
	}, 1500);
	var finalPrice = selectedCar.rentPrice * userDays
	var finalDays = userDays / 10;
	document.getElementById('usersName').innerHTML = "Purchasers Name: "+ clientUsername
	document.getElementById('usersVehicle').innerHTML = "Chosen Vehicle: "+ selectedCar.name;
	document.getElementById('usersPrice').innerHTML = "Final Price: $"+ finalPrice.toFixed(2);
	document.getElementById('usersDays').innerHTML = "Days Rented: "+ finalDays
}

/********************************************************************/
// Form Sent Listners
//
/********************************************************************/

/********************************************************************/
// Name Form Sent Listners
/********************************************************************/
nameform.addEventListener('submit', e => { // Listening for event.
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

/********************************************************************/
// Age Form Sent Listners
/********************************************************************/
ageForm.addEventListener('submit', e => { // Listening for event.
	e.preventDefault();

	validateAgeInputs(); // Runnning validate age function.

	if(validAge == true){ // Checking age is valid
		ageFormComplete(); // Running complete function if age is valid
	}
});

/********************************************************************/
// Category Form Sent Listners
/********************************************************************/
categoryForm.addEventListener('submit', e => { // Listening for event.
	e.preventDefault();

	userCategory = categorySelect.options[categorySelect.selectedIndex].value;
	categoryFormComplete()
	console.log(userCategory)
});

/********************************************************************/
// Door Form Sent Listners
/********************************************************************/
doorForm.addEventListener('submit', e => { // Listening for event.
	e.preventDefault();

	userDoors = doorSelect.options[doorSelect.selectedIndex].value;
	doorFormComplete()
	console.log(userDoors)
});

/********************************************************************/
// Days Form Sent Listners
/********************************************************************/
daysForm.addEventListener('submit', e => { // Listening for event.
	e.preventDefault();

	userDays = daysSelect.options[daysSelect.selectedIndex].value;
	console.log(userDays);
	daysFormComplete();
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
		if(ageValue < minAge){ // Chgecking if age is under the min age to send too young message.
			setErrorFor(userAge, 'Your too young to rent a vehicle.') // Sending error message.
		}
		if(ageValue > maxAge){ // Checking if age is over the max age to send too old message.
			setErrorFor(userAge, 'Your too old to rent a vehicle.') // Sending error message.
		}
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
function setErrorFor(_input, _message) { // Sending error message function
	const textbox = _input.parentElement; // Getting the parent element of the input.
	const small = textbox.querySelector('small'); // looking for the small element
	textbox.className = 'textbox error'; // Setting the class name to error
	small.innerText = _message; // adding the message to the text
}

/********************************************************************/
// Success Function
// Purpose is show that the input is right.
/********************************************************************/
function setSuccessFor(_input) {
	const textbox = _input.parentElement; // Getting the parent element of input
	textbox.className = 'textbox success'; // Adding success to the class
}

/********************************************************************/
// Select Car Function
// Purpose is to choose a car that suits the user.
/********************************************************************/
function selectCar(){
	selectedCar = rentVehicles.find((element) => element.carCategory == userCategory && element.carDoors == userDoors);
}

/********************************************************************/
//    END OF PROGRAM
/********************************************************************/
