const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date.


let todayDate=Date.now();
let lastVisit = Number(window.localStorage.getItem("last-visit"))
localStorage.setItem("last-visit",todayDate);
console.log(lastVisit)
let difference =Number(todayDate)-Number(lastVisit)

if(difference>8640000){difference=difference/8640000
difference = Math.round(difference)
if(difference>1){
todayDisplay.textContent =  (`${difference} Days`)}
else{todayDisplay.textContent =  (`${difference} Day`)}}

else if(difference>3600000 && difference<86400000){
difference=difference/360000
difference = Math.round(difference)
if(difference>1){
todayDisplay.textContent =  (`${difference} Hours`)}
else{todayDisplay.textContent =  (`${difference} Hour`)}}

else if(difference>60000 && difference<3600000){difference = difference/60000
difference = Math.round(difference)
if(difference>1){
todayDisplay.textContent =  (`${difference} Minutes`)}
else{todayDisplay.textContent =  (`${difference} Minute`)}}

else if (difference>1000 && difference<60000){difference = difference/1000
difference = Math.round(difference)
todayDisplay.textContent= (`${difference} Seconds`)}

else{todayDisplay.textContent= (`${difference} Milliseconds`)}