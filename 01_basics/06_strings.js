//for concatenation

const name = "rahul"
const age = "18"

//console.log(name + age + "good"); this method is not a good practice

//good practice is using backticks

console.log(`Hello my name is ${name} and my age is ${age}`); //this is a good practice because in $ we can use diffrent methods like we can convert it to uppercase etc.






//---There are different methods or properties of string which are as follows:-

const gameName= new String('Rahul Chaudhary') //another way to write a string

console.log(gameName.length); // property-> .length //o/p-> 15

console.log(gameName.toUpperCase()); //-> RAHUL CHAUDHARY

 //if i want to see the characters position

 console.log(gameName.charAt(0)); // -> R

 // if i want to find the characters position then:

 console.log(gameName.indexOf("y")); // -> 14

 // if wnat to access the substring

 const newString = gameName.substring(1,7)
 console.log(newString); // -> ahul C (here we cannot start the value from the negative value even if we do that then it will automatically start from 0)

 const NewString= gameName.slice(1,7)
 console.log(NewString);//-> ahul C
 const newstring=gameName.slice(-8,3)
 console.log(newstring); //( this is the only diffrence between substring and the slice method that in slice we can use negative value and we start from reverse)



   /*if we want to delete the extra White spaces from the string like if the user has inputed the extra spaces unknowingly then we use a method call (trim)*/

 const newStringOne= "  rahul      "
 console.log(newStringOne);// -> "  rahul"
 console.log(newStringOne.trim());//-> "rahul"



 /* If we want to replace any thing from the string */

 const url = "https://rahul.com/rahul%20Chaudhary"
 console.log(url.replace("%20","-")); //-> "https://rahul.com/rahul-Chaudhary"




 /* if i want to convert the string into an array */
 // if use split

 const newStringThree="rahul-chaudhary-great"

 console.log(newStringThree.split("-")); //->[ 'rahul', 'chaudhary', 'great' ]