/******s**********

    Assignment Project
    Name: Jinyoung JANG
    Date: June 16, 2019
    Description: Web Portfolio Javascript for creating profile

*****************/

/**

 * Script_name: portfolio.js

 *

 * Project: Assignment project

 * Author: Jinyoung JANG

 * Date Created: June. 17. 2019

 * Last Modified: June. 17. 2019

 */


// Add document load event listener
document.addEventListener("DOMContentLoaded",load);

/*
 * Handles the load event of the document.
 */

function load(){
	loadJSON(function(response) {
        // Parse JSON string into object
        portfolioData = JSON.parse(response);
        createProfile(portfolioData);
    });
}


/*

 * With XMLHttpRequest object, open json file, and sends it back to load function to create profile

 * param callback  returning data from anonymous function in load()

 */

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'js/portfolio3.json', true);

    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}


/*

 * create profile webpagge by using JSON

 * param protfolioData data from JSON file

 */

function createProfile(portfolioData){
	for(let i=0; i<portfolioData.length; i++){
		let portfolio = portfolioData[i];

		let h5 = document.createElement("h5");
		h5.innerHTML = portfolioData[i].title;
		let divProfile = document.getElementById("profile_contents");
		divProfile.appendChild(h5);

		for(let j=0; j<portfolio.table.length; j++) {
			let ul = document.createElement("ul");

			let li = document.createElement("li");
			let img = document.createElement("img");
      let label = document.createElement("label");
      let h6 = document.createElement("h6");
      let p = document.createElement("p");

      img.setAttribute("src", portfolio.table[j].image);
      label.innerHTML = portfolio.table[j].name;
      li.appendChild(img);
      li.appendChild(label);

      let li2 = document.createElement("li");
      h6.innerHTML = portfolio.table[j].place;
      li2.appendChild(h6);

      let li3 = document.createElement("li");
      li3.setAttribute("class", "date");
      li3.innerHTML = portfolio.table[j].date;

      let li4 = document.createElement("li");
      p.innerHTML = portfolio.table[j].description;
      li4.appendChild(p);

      ul.appendChild(li);
      ul.appendChild(li2);
      ul.appendChild(li3);
      ul.appendChild(li4);
      divProfile.appendChild(ul);
		}
	}
}
