let Fruit=[];
document.getElementById("last").textContent = `Last Modification: ${document.lastModified}`;

/*setting local storage and basic variables*/
const drinksDisplay= document.getElementById("drinkNumber");
let drinks = Number(localStorage.getItem("drinks-ls"));
drinksDisplay.textContent = drinks;
function toggleMenu(){
    document.getElementById("menu").classList.toggle("open");
    document.getElementById("navbtn").classList.toggle("open");}
const x = document.getElementById("navbtn");
x.onclick = toggleMenu;
const currentTemp = document.querySelector('#current-temp');
const tomorrowTemp = document.querySelector('#tomorrow-temp');
const day3Temp = document.querySelector('#day3-temp');
const day4Temp = document.querySelector('#day4-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity= document.querySelector('#current-humidity');
const weatherurl = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.158092&lon=-117.350594&cnt=5&mode=JSON&units=imperial&appid=3045dd712ffe6e702e3245525ac7fa38';
const fruiturl = 'https://brotherblazzard.github.io/canvas-content/fruit.json'



/*Here I start the Fresh page API*/
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
    const inglbl = document.createElement('div');
   const name = document.createElement("h2");
   const carbohydrates = document.createElement("span");
   const protein = document.createElement("span");
   const fat = document.createElement("span");
   const calories = document.createElement("span");
   const  sugar = document.createElement("span");
   let space = document.createElement("br");
   let space2=document.createElement("br");
   let space3=document.createElement("br");
   let space4=document.createElement("br");
   let details =document.createElement("span")


    name.textContent = fruitData.name;
    carbohydrates.textContent = fruitData.nutritions.carbohydrates;
    protein.textContent = fruitData.nutritions.protein;
    fat.textContent = fruitData.nutritions.fat;
    calories.textContent = fruitData.nutritions.calories;
    sugar.textContent = fruitData.nutritions.sugar;
    carbohydrates.class = `${fruitData.name}`;
    protein.class = `${fruitData.name}`;
    fat.class = `${fruitData.name}`;
    calories.class = `${fruitData.name}`;
    sugar.class = `${fruitData.name}`;


    fruitlist={name:`${name.textContent}`,carbohydrates: carbohydrates.textContent ,protein:protein.textContent , fat:fat.textContent ,calories:calories.textContent ,sugar:sugar.textContent }
    details.append(`Carbohydrates: ${carbohydrates.innerText}g`,space,` Protiens: ${protein.textContent}g`,space2,` Fats: ${fat.textContent}g`,space3,` Calories: ${calories.textContent}g`,space4,` Sugar: ${sugar.textContent}g`);
  inglbl.classList.add("cards");
  inglbl.append( name, details);
  document.querySelector(".cardDisplay").appendChild(inglbl);
  Fruit.push(fruitlist);
}
console.log(Fruit)
document.querySelector("button").addEventListener("click", recipe); 
 

/*These funtions take the users info, validate it and return it to be displayed. */
function recipe(){
  let order= new Date()
  document.getElementById("userName").textContent = document.getElementById("fname").value +"'s";
  document.getElementById("specialInst").innerHTML = document.getElementById("instructions").value
  document.querySelector(".userEmail").textContent = document.getElementById("email").value
  document.querySelector(".userPhone").innerHTML = document.getElementById("phone").value

  let ingredient1=check();
  let ing1= Fruit[ingredient1];
  let ingredient2=check2();
  let ing2= Fruit[ingredient2];
  let ingredient3=check3();
  let ing3= Fruit[ingredient3];
  let ingrtt = (`${ing1.name} + ${ing2.name} + ${ing3.name}`);
  let carbt =(+ing1.carbohydrates) + (+ing2.carbohydrates) + (+ing3.carbohydrates);
  let prott = (+ing1.protein) + (+ing2.protein) + (+ing3.protein);
  let fatst = (+ing1.fat) + (+ing2.fat) + (+ing3.fat);
  let calort = (+ing1.calories) + (+ing2.calories) + (+ing3.calories);
  let sugart = (+ing1.sugar) + (+ing2.sugar) + (+ing3.sugar);
carbt=carbt.toFixed(1)
prott =prott.toFixed(1)
fatst =fatst.toFixed(1)
calort =calort.toFixed(1)
sugart = sugart.toFixed(1)
console.log(order);
order = order.toLocaleString();
console.log(order);
document.getElementById("timestamp").textContent=order;
  document.getElementById("title").textContent = ingrtt;
  document.getElementById("carbohydrates").textContent = carbt;
  document.getElementById("Protiens").textContent = prott;
  document.getElementById("Fats").textContent = fatst;
  document.getElementById("Calories").textContent =calort;
  document.getElementById("Sugar").textContent =sugart;


  drinks++;
  drinksDisplay.textContent = drinks;
  console.log(drinks)
  localStorage.setItem("drinks-ls", drinks);
}
function check(){
  let fruitcolumn1= document.querySelector(".column1")
  for (let i = 0; i < 117; i++) {
    if (fruitcolumn1.children[i].checked==true){
      ingredient1= fruitcolumn1.children[i].id
      console.log(ingredient1);
       const ingredient= (i /3);
       return ingredient;
    }
    else{
      console.log("didn't work");
    }
  };
}
function check2(){
  let fruitcolumn2= document.querySelector(".column2")
  for (let i = 0; i < 117; i++) {
    if (fruitcolumn2.children[i].checked==true){
      ingredient2= fruitcolumn2.children[i].id
      console.log(ingredient2);
       const ingredient= (i /3);
       return ingredient;
    }
    else{
      console.log("didn't work");
    }
  };
}
function check3(){
  let fruitcolumn2= document.querySelector(".column3")
  for (let i = 0; i < 117; i++) {
    if (fruitcolumn2.children[i].checked==true){
      ingredient2= fruitcolumn2.children[i].id
      console.log(ingredient2);
       const ingredient= (i /3);
       return ingredient;
    }
    else{
      console.log("didn't work");
    }
  };
}



/*Weather API and date. */
async function weatherapiFetch() {
    try {
      const response = await fetch(weatherurl);
      if (response.ok) {
        const info = await response.json();
        console.log(info);
        weatherResults(info);
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