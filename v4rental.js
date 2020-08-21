
const form = document.getElementById('nameform');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const nameRegex = /^[a-zA-Z]+$/;

var validFirstName = false;
var validLastName = false;
var validName = false;

form.addEventListener('submit', e => {
	e.preventDefault();

	validateInputs();
	while (validLastName == true && validFirstName === true) {
		validName = true;
		break;
	}

	if(validName == true){
		delay(8)
		window.location.assign('age.html');
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

function delay(n){
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}

function pageTransition() {
	var tl = gasp.timeline();
	tl.to(".loading-screen", {
		duration: 1.2,
		width: "100%",
		left: "0%",
		ease: "Expo.easeInOut"
	});

	tl.to(".loading-screen", {
		duration: 1,
		width: "100%",
		left: "100%",
		ease: "Expo.easeInOut",
		delay: 0.3
	});

	tl.set(".loading-screen", { left: "-100%" });
}
