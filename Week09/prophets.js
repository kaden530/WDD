const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

  
  async function getprophets() {
    const response = await fetch(requestURL);
    if(response.ok){
      const data =await response.json();
    data.prophets.forEach(prophet=>{displayProphets(prophet)})};
}
const prophets = getprophets();

  function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let info = document.createElement('p');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name}  ${prophet.lastname}`;
    Present="Present"
    if(prophet.death== null){prophet.death=`${Present}`}
    info.textContent= ` ${prophet.birthdate} - ${prophet.death} `
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.lastname + ' - ' + prophet.order + 'Latter-day President.');
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(info)
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);}
    displayProphets(data.prophets);