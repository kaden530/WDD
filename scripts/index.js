let last =new Date(document.lastModified);
document.getElementById("last").innerHTML= last;
let year = new Date();
year= year.getFullYear();
document.querySelector('#year').textContent = year;

let click = document.querySelector('.navbtn');
let list = document.getElementById('nav-drop');
click.addEventListener("click",()=>{
    list.classList.toggle('newlist');});

function toggle() {
    let list = document.getElementById("nav-drop")
    list.classList.toggle(".newlist");
      }
      