// const todos = [
//   {
//     id: 1,
//     text: "Do your work",
//     isCompleted: false,
//   },
//   {
//     id: 2,
//     text: "eating food",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: "goind out",
//     isCompleted: false,
//   },
// ];

//ForEach
// todos.forEach(function (todo) {
//   // console.log(todo.text);
// });

//Map
// const todoText = todos.map(function (todo) {
//   return todo.text;
// });
//console.log(todoText);

//filter
// const todoCompleted = todos
//   .filter(function (todo) {
//     return todo.isCompleted === true;
//   })
//   .map(function (todo) {
//     return todo.text;
//   });
//console.log(todoCompleted);

//if condition
// const x = 14;
// if (x === 10) {
//   //console.log("x is 10");
// } else if (x > 10) {
//   //console.log("X is greater than 10");
// } else {
//   //console.log("x is less than 10");
// }

// or || , and &&

//ternary operator
// const num = 6;
// const color = num < 10 ? "red" : "blue";
//console.log(color);

//switches
// const num = 10;
// const color = num < 10 ? "red" : "blue";

// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "blue":
//     console.log("color is blue");
//     break;
//   default:
//     console.log("color is Not red or blue");
//     break;
// }

//function
// function addNums(num1, num2) {
//   return num1 + num2;
// }
// console.log(addNums(2, 5));

//Object-Oriented-(constructor function)
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
// }
// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

//Class
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// //Instantiated object
// const person1 = new Person("Shristi", "Darlami", "10-18-1999");
// const person2 = new Person("Ajay", "Gurung", "12-12-1995");
// console.log(person1.getFullName());
