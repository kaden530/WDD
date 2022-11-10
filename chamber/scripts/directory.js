const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");



gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
	display.classList.add("list");
	display.classList.remove("grid");
});


const requestURL = 'https://kaden530.github.io/WDD/chamber/JSON/data.JSON';
const cards = document.querySelector('.cards');

  
  async function getComps() {
    const response = await fetch(requestURL);
    const data =await response.json();
    data.companies.forEach(company=>{displayComps(company)})};

const companies = getComps();

  function displayComps(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let picture = document.createElement('img');
    let info = document.createElement('p');
  
    // Change the textContent property of the h2 element to contain the company's full name
    h2.textContent = company.name;
    info.textContent= (` ${company.type} \n ${company.location} \n ${company.hours}`);
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    picture.setAttribute('src', company.imageurl);
    picture.setAttribute('alt', company.name);
    picture.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
	display.appendChild(card);
    card.appendChild(h2);
    card.appendChild(picture);
    card.appendChild(info)
    // Add/append the existing HTML div with the cards class with the section(card)
    display.appendChild(card);}
    displayComps(data.companies);