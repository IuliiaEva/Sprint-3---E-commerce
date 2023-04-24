
// Exercise 6
function validate() {
	
	var error = 0
	// Get the input fields
	var fName = document.getElementById("fName")
	var fLastN = document.getElementById("fLastN")
	var fEmail = document.getElementById("fEmail")
	var fPassword = document.getElementById("fPassword")
	var fAddress = document.getElementById("fAddress")
	var fPhone = document.getElementById("fPhone")
	let fSubmit = document.getElementById("formS")

	// // Get the error elements
	const addClassError = (element, error) => {
		if(error){
			element.classList.add('is-invalid')
			element.classList.remove('is-valid')
		}
		else{
			element.classList.remove('is-invalid')
			element.classList.add('is-valid')
		}
	}
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value === "" || fName.value.length < 3 || !fName.value.match(/^[a-zA-Z]+$/)){
		addClassError(fName, true)
		errorName.innerHTML = "El nombre debe tener al menos 3 letras y solo puede contener letras."
		error++
	}
	else{
		addClassError(fName, false)
		errorName.innerHTML = ""
	}
	if(fEmail.value === "" || fEmail.value.length < 6 || !fEmail.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/
	)){
		addClassError(fEmail, true)
		errorEmail.innerHTML = "El email debe contener al menos 6 caracteres."
		error++
	}
	else{
		addClassError(fEmail, false)
		errorEmail.innerHTML = ""
	}

	if(fAddress.value === "" || fAddress.value.length < 3){
		addClassError(fAddress, true)
		errorAddress.innerHTML = "La dirección debe tener al menos 3 caracteres."
		error++
	}
	else{
		addClassError(fAddress, false)
		errorAddress.innerHTML = ""
	}	
	

	if(fLastN.value === "" || fLastN.value.length < 3 || !fLastN.value.match(/^[a-zA-Z]+$/)){
		addClassError(fLastN, true)
		errorLastN.innerHTML = "El apellido debe tener al menos 3 letras y solo puede contener letras."
		error++
	}
	else{
		addClassError(fLastN, false)
		errorLastN.innerHTML = ""
	}
	
	if(fPassword.value === "" || fPassword.value.length < 6 || fPassword.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	)){
		addClassError(fPassword, true)
		errorPassword.innerHTML = "El password debe tener al menos 6 caracteres y debe contener al menos 1 letra o 1 numero."
		error++
	}
	else{
		addClassError(fPassword, false)
		errorPassword.innerHTML = ""
	}

	if(fPhone.value === "" || fPhone.value.length < 9 || isNaN(fPhone.value)){
		addClassError(fPhone, true)
		errorPhone.innerHTML = "El telefono debe tener al menos 9 digitos y solo puede contener numeros."
		error++
	}
	else{
		addClassError(fPhone, false)
		errorPhone.innerHTML = ""
	}

	//return false
	if (error > 0) {
		fSubmit.addEventListener("submit", event => {
			event.preventDefault()
		}, true)
		alert("Error")
	} else {
		alert("OK")

	}

}
