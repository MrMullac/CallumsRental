
const form = document.getElementById('nameform');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const nameRegex =  /^[A-Z][a-z0-9_-]{1,19}$/;
const userAge = document.getElementById('userage')
const maxAge = 90;
const minAge = 18;
const ageForm = document.getElementById('ageForm')

var validFirstName = false;
var validLastName = false;
var validName = false;
var validAge = false;


// Starting rental function.
function startRental(){
	var rentInfo = document.getElementById("rentStart");

	$("#rentStart").fadeOut(400, function(){});

	var backgroundImage = $('#imageBackground')
	var backgroundImgId = document.getElementById('imageBackground');

	backgroundImage.fadeOut(1000, function(){
		backgroundImgId.src = 'nameimage.jpg'
		backgroundImage.fadeIn(1000);
	})

	setTimeout(function(){
			var backgroundImage = $('#imageBackground')
			var backgroundImgId = document.getElementById('imageBackground');
			$("#nameinfo").fadeIn(500, function(){});
	}, 1500);
};

// Form Name completion function
function nameFormComplete(){
	var nameInfo = document.getElementById("nameinfo");

	$("#nameinfo").fadeOut(500, function(){});

	var backgroundImage = $('#imageBackground')
	var backgroundImgId = document.getElementById('imageBackground');

	backgroundImage.fadeOut(1000, function(){
		backgroundImgId.src = 'background.jpg'
		backgroundImage.fadeIn(1000);
	})

	document.getElementById('ageMSG').innerHTML = firstname.value + ", What's your age?";

	setTimeout(function(){
		$("#ageInfo").fadeIn(500, function(){});
	}, 1500);
}

function ageFormComplete(){
	var ageInfo = document.getElementById("ageInfo");

	$("#ageInfo").fadeOut(500, function(){});

	var backgroundImage = $('#imageBackground')
	var backgroundImgId = document.getElementById('imageBackground');

	backgroundImage.fadeOut(1000, function(){
		backgroundImgId.src = 'background.jpg'
		backgroundImage.fadeIn(1000);
	})

	//setTimeout(function(){
	//	$("#ageInfo").fadeIn(500, function(){});
	//}, 1500);
}

form.addEventListener('submit', e => {
	e.preventDefault();

	validateNameInputs();
	while (validLastName == true && validFirstName === true) {
		validName = true;
		break;
	}

	if(validName == true){
		nameFormComplete();
	}
});

ageForm.addEventListener('submit', e => {
	e.preventDefault();

	validateAgeInputs();

	if(validAge == true){
		ageFormComplete();
	}
});


// validating name inputs.
function validateNameInputs() {

	const firstnameValue = firstname.value.trim();
	const lastnameValue = lastname.value.trim();

  if(!nameRegex.test(firstnameValue)){
    setErrorFor(firstname, 'Invalid First Name')
		validFirstName = false;
  } else {
    setSuccessFor(firstname)
		validFirstName = true
  }

  if(!nameRegex.test(lastnameValue)){
    setErrorFor(lastname, 'Invalid Last Name')
		validLastName = false;
  } else {
    setSuccessFor(lastname)
		validLastName = true;
  }
}

// Validating age inputs
function validateAgeInputs(){

	const ageValue = userAge.value.trim();

	if(ageValue < minAge || ageValue > maxAge){
		setErrorFor(userAge, 'Your either too young/old.')
		validAge = false;
	} else {
		setSuccessFor(userAge)
		validAge = true;
	}
}


// Error Function
function setErrorFor(input, message) {
	const textbox = input.parentElement;
	const small = textbox.querySelector('small');
	textbox.className = 'textbox error';
	small.innerText = message;
}

// Success function
function setSuccessFor(input) {
	const textbox = input.parentElement;
	textbox.className = 'textbox success';
}
