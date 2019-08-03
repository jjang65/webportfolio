/******s**********
    
    Assignment Project
    Name: Jinyoung JANG
    Date: June 16, 2019
    Description: Web Portfolio Javascript for clietns to get copied email address

*****************/

/**

 * Script_name: email.js

 *

 * Project: Assignment project

 * Author: Jinyoung JANG

 * Date Created: June. 17. 2019

 * Last Modified: June. 17. 2019

 */


// Add document load event listener
document.addEventListener("DOMContentLoaded", load);

/*
 * Handles the load event of the document.
 */
function load()
{
	// Add event listener for email to copy to client's clipboard
	let myEmailAddresses = document.getElementsByClassName("myEmailAddress");
	for(let i=0; i< myEmailAddresses.length; i++){
		let myEmailAddress = myEmailAddresses[i];
		myEmailAddress.addEventListener('click', 
			function(){
				navigator.clipboard.writeText('jjy2zzbai2@gmail.com')
				  .then(() => {
				  	alert("My email address has been copied, please paste and use it");
				  	console.log("Success");
				  })
				  .catch(err => {
				    console.log('Something went wrong', err);
				  });
			}
		);
	}
}

