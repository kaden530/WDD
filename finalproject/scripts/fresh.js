

function toggleMenu(){
    document.getElementById("menu").classList.toggle("open");
    document.getElementById("navbtn").classList.toggle("open");}
const x = document.getElementById("navbtn");
x.onclick = toggleMenu;
const fruit1 = document.querySelector("select.fruit");
const fruit2 = document.querySelector("select.fruit2");
const fruit3 = document.querySelector("select.fruit3");
const currentTemp = document.querySelector('#current-temp');
const tomorrowTemp = document.querySelector('#tomorrow-temp');
const day3Temp = document.querySelector('#day3-temp');
const day4Temp = document.querySelector('#day4-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity= document.querySelector('#current-humidity');
const weatherurl = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.158092&lon=-117.350594&cnt=5&mode=JSON&units=imperial&appid=3045dd712ffe6e702e3245525ac7fa38';
const fruiturl = 'https://brotherblazzard.github.io/canvas-content/fruit.json'

async function fruitapiFetch() {
  try {
    const response = await fetch(fruiturl);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
       data.forEach(fruit=>{fruitResults(fruit)});
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }


 fruitapiFetch();

function  fruitResults(fruitData) {
   let ingrdnt = document.createElement('option');
   let genus = document.createElement("span");
   let name = document.createElement("span");
   let id = document.createElement("span");
   let family = document.createElement("span");
   let order = document.createElement("span");
   let nutritions = document.createElement("span");
   let carbohydrates = document.createElement("span");
   let protein = document.createElement("span");
   let fat = document.createElement("span");
   let calories = document.createElement("span");
   let  sugar = document.createElement("span");


    genus.textContent = fruitData.genus;
    name.textContent = fruitData.name;
    id.textContent = fruitData.id;
    family.textContent = fruitData.family;
    order.textContent = fruitData.order;
    nutritions.textContent = fruitData.nutritions;
    carbohydrates.textContent = fruitData.carbohydrates;
    protein.textContent = fruitData.carbohydrates;
    fat.textContent = fruitData.fat;
    calories.textContent = fruitData.calories;
    sugar.textContent = fruitData.sugar;
    ingrdnt.appendChild(name)
   fruit1.append(ingrdnt);}





async function weatherapiFetch() {
    try {
      const response = await fetch(weatherurl);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        weatherResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  weatherapiFetch();


  function  weatherResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(0)}</strong>`;
    humidity.innerHTML = `<strong>${weatherData.list[0].main.humidity}</strong>`;
    tomorrowTemp.innerHTML = `<strong>${weatherData.list[1].main.temp.toFixed(0)}</strong>`;
    day3Temp.innerHTML = `<strong>${weatherData.list[2].main.temp.toFixed(0)}</strong>`;
    day4Temp.innerHTML = `<strong>${weatherData.list[3].main.temp.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[1].weather[0].icon}.png`;
    const desc = weatherData.list[0].weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }



const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var now = new Date();

let day = weekday[now.getDay()];
const day2wk = document.querySelector('#Day2');
const day3wk = document.querySelector('#Day3');
const day4wk = document.querySelector('#Day4');

if (weekday.indexOf(day) !=6 ) {day2wk.innerHTML = `${weekday[weekday.indexOf(day)+1]}`}
else {day2wk.innerHTML=weekday[0]};
if (weekday.indexOf(day) !=5 ) {day3wk.innerHTML = `${weekday[weekday.indexOf(day)+ 2]}`}
else {day3wk.innerHTML=weekday[0]};
if (weekday.indexOf(day) !=4 ) {day4wk.innerHTML = `${weekday[weekday.indexOf(day)+ 3]}`}
else {day4wk.innerHTML=weekday[0]};