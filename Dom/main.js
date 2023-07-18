//selection

//Sigle element
// console.log(document.getElementById("my-form"));
// console.log(document.querySelector(".container"));

//Multiple element
// console.log(document.querySelectorAll(".item"));
//console.log(document.getElementsByClassName("item"));
//console.log(document.getElementsByTagName("li"));

// const ul = document.querySelector(".items");
//ul.remove();
//ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Namaste";
// ul.lastElementChild.innerHTML = "<h1>Hey<h1>";

//Changing style
// const btn = document.querySelector(".btn");
// btn.style.background = "blue";

//Styling button
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   //console.log(e.target.className);
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
// });

//styling form
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  //console.log(nameInput.value);

  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 2000);
  } else {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode)(
      `${nameInput.value} : ${emailInput.value}`
    );

    userList.appendChild(li);

    //clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
