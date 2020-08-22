
const form = document.getElementById('nameform');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const nameRegex = /^[a-zA-Z]+$/;

var validFirstName = false;
var validLastName = false;
var validName = false;

// Fade script

function nameFormComplete(){
	var nameInfo = document.getElementById("nameinfo")
	$("#nameinfo").fadeOut(500, function(){});
}

form.addEventListener('submit', e => {
	e.preventDefault();

	validateInputs();
	while (validLastName == true && validFirstName === true) {
		validName = true;
		break;
	}

	if(validName == true){
		nameFormComplete()
	}
});

function validateInputs() {
	// trim to remove the whitespaces
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

function setErrorFor(input, message) {
	const textbox = input.parentElement;
	const small = textbox.querySelector('small');
	textbox.className = 'textbox error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const textbox = input.parentElement;
	textbox.className = 'textbox success';
}
