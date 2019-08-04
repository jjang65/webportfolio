/******s**********
    
    Assignment Project
    Name: Jinyoung JANG
    Date: June 16, 2019
    Description: Web Portfolio Javascript for form validation

*****************/

/**

 * Script_name: formValidate.js

 *

 * Project: Assignment project

 * Author: Jinyoung JANG

 * Date Created: June. 17. 2019

 * Last Modified: August. 3. 2019

 */


/*
 * Removes white space from a string value.
 *
 * return  A string with leading and trailing white-space removed.
 */
function trim(str) 
{
	// Uses a regex to remove spaces from a string.
	return str.replace(/^\s+|\s+$/g,"");
}

/*
 * Handles the submit event of the survey form
 *
 * param e  A reference to the event object
 * return   True if no validation errors; False if the form has
 *          validation errors
 */
function validate(e)
{
	// Hides all error elements on the page
	hideAllErrors();

	// Determine if the form has errors
	if(formHasErrors()){
		// Prevents the form from submitting
		e.preventDefault();
		// Returning false prevents the form from submitting
		return false;
	}

	return true;
}

/*
 * Determines if a text field element has input
 *
 * param   fieldElement A text field input element object
 * return  True if the field contains input; False if nothing entered
 */
 function formFieldHasInput(fieldElement){
 	// check if the text field has a value
 	if(fieldElement.value == null || trim(fieldElement.value) == ""){
 		// Invalid entry
 		return false;
 	}

 	// Valid entry
 	return true;
 }

/*
 * Handles the reset event for the form.
 *
 * param e  A reference to the event object
 * return   True allows the reset to happen; False prevents
 *          the browser from resetting the form.
 */
function resetForm(e)
{
	// Confirm that the user wants to reset the form.
	if ( confirm('Clear message?') )
	{
		// Ensure all error fields are hidden
		hideAllErrors();
		
		// Set focus to the first text field on the page
		document.getElementById("fullname").focus();
		
		// When using onReset="resetForm()" in markup, returning true will allow
		// the form to reset
		return true;
	}

	// Prevents the form from resetting
	e.preventDefault();
	
	// When using onReset="resetForm()" in markup, returning false would prevent
	// the form from resetting
	return false;	
}

/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
function formHasErrors()
{
	// Set errorFlag as false
	let errorFlag = false;


	// Check if fullname is empty or not
	let name = document.getElementById("name");
	if(!formFieldHasInput(name)){
		// Display the appropriate error message
		document.getElementById("name_error").style.display = "block";
		if(!errorFlag){
			name.focus();
			name.select();
		}

		// Raise the error flag
		errorFlag = true;
	}


	// Check if email is empty or not
	let email = document.getElementById("email");
	if(!formFieldHasInput(email)){
		// Display the appropriate error message
		document.getElementById("email_error").style.display = "block";
		if(!errorFlag){
			email.focus();
			email.select();
		}

		// Raise the error flag
		errorFlag = true;
	}

	// Create a regular expression for email
	let regexForEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

	let emailFieldValue = document.getElementById("email").value;

	// Determine if the value passes the regexForAddress
	if(!regexForEmail.test(emailFieldValue)){
		// Display the appropriate error message
		document.getElementById("emailformat_error").style.display = "block";	
		if(!errorFlag){
			email.focus();
			email.select();
		}

		// Raise the error flag
		errorFlag = true;
	}

	// Check if subject is empty or not
	let subject = document.getElementById("subject");
	if(!formFieldHasInput(subject)){
		// Display the appropriate error message
		document.getElementById("subject_error").style.display = "block";
		if(!errorFlag){
			subject.focus();
			subject.select();
		}

		// Raise the error flag
		errorFlag = true;
	}



	// Check if phone is empty or not
	// let phone = document.getElementById("phone");
	// if(!formFieldHasInput(phone)){
	// 	// Display the appropriate error message
	// 	document.getElementById("phone_error").style.display = "block";
	// 	if(!errorFlag){
	// 		phone.focus();
	// 		phone.select();
	// 	}

	// 	// Raise the error flag
	// 	errorFlag = true;
	// }

	// // Create a regular expression for phone
	// let regexForPhone = new RegExp(/^\d{10}$/);

	// let phoneValue = document.getElementById("phone").value;

	// // Determine if the value passes the regexForPhone
	// if(!regexForPhone.test(phoneValue)){
	// 	// Display the appropriate error message
	// 	document.getElementById("phoneformat_error").style.display = "block";
	// 	if(!errorFlag){
	// 		phone.focus();
	// 		phone.select();
	// 	}

	// 	// Raise the error flag
	// 	errorFlag = true;
	// }


	//Raise the error flag
	return errorFlag;
}

/*
 * Hides all of the error elements.
 */
function hideAllErrors()
{
	// Get an array of error elements
	let error = document.getElementsByClassName("error");

	// Loop through each element in the error array
	for ( let i = 0; i < error.length; i++ )
	{
		// Hide the error element by setting it's display style to "none"
		error[i].style.display = "none";
	}
}

/*
 * Handles the load event of the document.
 */
function load()
{
	// Add event listener for the form submit
	document.getElementById("contactForm").addEventListener("submit", validate, false);

	// Reset the from using the default browser reset
	// This is doen to ensure the radio buttons are unchecked when the Page is refreshed
	// This line of code must be done before attacing the event listener for the customer reset
	document.getElementById("contactForm").reset();

	// Add event listener for the form reset
	document.getElementById("contactForm").addEventListener("reset", resetForm, false);

	// Hide all errors
	let errors = document.getElementsByClassName("error");
	for(let i = 0; i < errors.length; i++){
		errors[i].style.display = "none";
	}
}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);












