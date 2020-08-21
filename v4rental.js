
const form = document.getElementById('nameform');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const nameRegex = /^[a-zA-Z]+$/;

var validFirstName = false;
var validLastName = false;

form.addEventListener('submit', e => {
	e.preventDefault();

	validateInputs();
});

function validateInputs() {
	// trim to remove the whitespaces
	const firstnameValue = firstname.value.trim();
	const lastnameValue = lastname.value.trim();

  if(!nameRegex.test(firstnameValue)){
    setErrorFor(firstname, 'Invalid First Name')
  } else {
    setSuccessFor(firstname)
  }

  if(!nameRegex.test(lastnameValue)){
    setErrorFor(lastname, 'Invalid Last Name')
  } else {
    setSuccessFor(lastname)
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
