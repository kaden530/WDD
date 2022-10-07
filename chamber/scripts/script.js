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
const ordinals = ["st","nd","rd","th"]
var now = new Date();
let day = weekday[now.getDay()];
let month2 =month[now.getMonth()];
let ordinal = ordinals[now.getDay()-1];
var today= day +" "+ month2 +" "+ now.getDate() + ordinal +" "+ now.getFullYear()
document.querySelector('#todayIs').textContent = today;