document.querySelector("#last").textContent = `Last Modification: ${document.lastModified}`;

let year = new Date();
year= year.getFullYear();
document.querySelector('#year').textContent = year;

function toggleMenu(){
    document.getElementById("menu").classList.toggle("open");
    document.getElementById("navbtn").classList.toggle("open");}
const x = document.getElementById("navbtn");
x.onclick = toggleMenu;

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month =["January", "February", "March", "April", "May","June","July","August","September","October","November","December"]
var now = new Date();
let day = weekday[now.getDay()];
let month2 =month[now.getMonth()];
if(now.getDay()== 1){ ordinal ="st"}
else if (now.getDay()== 2){ ordinal ="nd"}
else if (now.getDay()== 2){ ordinal ="rd"}
else{ ordinal ="th"};
var today= day +" "+ month2 +" "+ now.getDate() + ordinal +" "+ now.getFullYear()
document.querySelector('#todayIs').textContent = today;