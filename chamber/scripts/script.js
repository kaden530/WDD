document.querySelector("#last").textContent = `Last Modification: ${document.lastModified}`;
window.onload = function(){document.querySelector("#loaded").textContent = (now);};

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
let h = (now.getHours());
if(now.getDay()== 1){ ordinal ="st"}
else if (now.getDay()== 2){ ordinal ="nd"}
else if (now.getDay()== 2){ ordinal ="rd"}
else{ ordinal ="th"};
if (day =="Monday" || day =="Tuesday"){
   let meeting = `Join us for the chamber meet and greet\n Wednesday at 7:00 p.m.`
    var today= day +" "+ month2 +" "+ now.getDate() + ordinal +" "+ now.getFullYear()
document.querySelector('#todayIs').textContent = today
document.querySelector('#meeting').append(meeting)
}
else {
var today= day +" "+ month2 +" "+ now.getDate() + ordinal +" "+ now.getFullYear()
document.querySelector('#todayIs').textContent = today};


 const weatherPart = document.querySelector(".weather-part");
 var wImg = document.querySelector(".weather");
 
 let api;
 


     if(navigator.geolocation){
         navigator.geolocation.getCurrentPosition(onSuccess);
     }else{
         alert("Your browser not support geolocation api");
     };
 

 
 function onSuccess(position){
     const {latitude, longitude} = position.coords;
     api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=3045dd712ffe6e702e3245525ac7fa38`;
     fetchData();
 }
 

 
 function fetchData(){
     fetch(api).then(res => res.json()).then(result => weatherDetails(result)).catch(() =>{});
}
 
 function weatherDetails(info){
        console.log(info);
         const city = info.name;
         const country = info.sys.country;
         const {description, id} = info.weather[0];
         const {temp, feels_like, humidity} = info.main;

       if(id == 800 && h >7 && h <19 ){
        wImg.style.backgroundImage = "url('images/sunlarge.jpg')";
        wImg.alt ="sunny";
         }else if(id == 800 && h <7 || h >19){
             wImg.style.backgroundImage = "url('images/nightlarge.jpg')";
             wImg.alt ="night";
         }else if(id <= 200 && id <= 232 && h >7 && h <19 ){
             wImg.style.backgroundImage = "url('images/stormlarge.jpg')";
             wImg.alt ="Stormy";
         }else if(id <= 200 && h <7 || h >19){
             wImg.style.backgroundImage = "url('images/stormynightlarge.jpg')";
             wImg.alt ="Night Storm";  
         }else if(id >= 600 && id <= 622 && h >7 && h <19 ){
             wImg.style.backgroundImage = "url('images/snowlarge.jpg')";
             wImg.alt ="Snowing";
         }else if(id >= 600 && id <= 622 && h <7 || h >19){
             wImg.style.backgroundImage = "url('images/snowynightlarge.jpg')";
             wImg.alt ="Night Snowing";
         }else if(id >= 701 && id <= 781 && h >7 && h <19 ){
             wImg.style.backgroundImage = "url('images/hazelarge.jpg')";
             wImg.alt ="Hazey";
         }else if(id >= 701 && id <= 781 && h <7 || h >19){
             wImg.style.backgroundImage = "url('images/hazenightlarge.jpg')";
             wImg.alt ="Hazey Night";
         }else if(id >= 801 && id <= 804 && h >7 && h <19 ){
            wImg.style.backgroundImage = "url('images/cloudylarge.jpg')";
            wImg.alt ="Cloudy";
         }else if(id >= 801 && id <= 804 && h <7 || h >19){
             wImg.style.backgroundImage = "url('images/cloudynightlarge.jpg')";
             wImg.alt ="Cloudy Night";
         }else if((id >= 500 && id <= 531 && h >7 && h <19 ) || (id >= 300 && id <= 321)){
             wImg.style.backgroundImage = "url('images/rainlarge.jpg')";
             wImg.alt ="Raining";
         }else if((id >= 500 && id <= 531 && h <7 || h >19) || (id >= 300 && id <= 321)){
             wImg.style.backgroundImage = "url('images/rainnightlarge.jpg')";
             wImg.alt ="Night Rain";
         }
         
         weatherPart.querySelector(".temp .numb").innerText = Math.floor(temp);
         weatherPart.querySelector(".weather").innerText = description;
         weatherPart.querySelector(".location span").innerText = `${city}, ${country}`;
         weatherPart.querySelector(".temp .numb-2").innerText = Math.floor(feels_like);
         weatherPart.querySelector(".humidity span").innerText = `${humidity}%`;
    
     }
 