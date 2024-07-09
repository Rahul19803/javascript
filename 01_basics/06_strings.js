//for concatenation

const name = "rahul"
const age = "18"

//console.log(name + age + "good"); this method is not a good practice

//good practice is using backticks

console.log(`Hello my name is ${name} and my age is ${age}`); //this is a good practice because in $ we can use diffrent methods like we can convert it to uppercase etc.

//---There are different methods or properties of string which are as follows:-

const gameName= new String('Rahul Chaudhary') //another way to write a string

console.log(gameName.length); // property-> .length //o/p-> 15

console.log(gameName.toLocaleUpperCase()); //-> RAHUL CHAUDHARY

 //if i want to see the characters position

 console.log(gameName.charAt(0));