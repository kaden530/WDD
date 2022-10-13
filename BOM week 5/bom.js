

const button = document.querySelector('button');
button.addEventListener('click', function() {
    let myItem = document.querySelector("input").value;
    if( myItem == "") {myItem="Nothing"}
    else {

var inputLi = document.createElement("li");
const deletebtn = document.createElement("button") ;
inputLi.append(myItem);
deletebtn.textContent = "❌";
inputLi.append(deletebtn);
const list = document.querySelector("ul");
list.append(inputLi);
deletebtn.addEventListener('click', () => {
    list.remove("inputLi");

});
inputLi.focus;
document.querySelector("input").value = "";
    };
});

/*
create an li element
create a delete button
populate the li elements textContent or innerHTML with the input
populate the button textContent with an ❌
append the li element with the delete button
append the list element with the li element just created and appended with text and the delete button
add an event listener to the delete button that removes the li element when clicked
send the focus to the input element
clean up the successful add of a chapter by changing the input to nothing or the empty string and setting the focus to the input. */