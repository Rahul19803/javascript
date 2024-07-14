const number = 400
console.log(number); //-> 400

const balance=new Number(100)
console.log(balance); //-> [Number: 100]



/* Numbers properties and fucntions */
//toString()
console.log(balance.toString());//-> 100(string)
//abhi yeh string ban hi gaya hai toh hum iski string ke properties use kar sakte hai jaise .length()
console.log(balance.toString().length);//-> 3

//toFixed()
console.log(balance.toFixed(2)); //-> decimal value upto two therefore o/p will be 100.00

//toPrecision()
const otherNumber=123.424420
console.log(otherNumber.toPrecision(3));//->123
console.log(otherNumber.toPrecision(4));//->123.4



//=============Maths=============

console.log(Math); //its an object

console.log(Math.round(2.8));//-> 3
console.log(Math.SQRT2);
console.log(Math.abs(-3));
console.log(Math.min(4,2,5,4,7,8,4,6));
console.log(Math.max(2,4,5,3,7,5,45,32,4,8657,435));
console.log(Math.ceil(8.2));//-> rounding off to its highest number which is 9
console.log(Math.floor(8.2));//rounding of to its lowest number which is 8 //and many more functions

//there is one more imp fucntion

console.log(Math.random());// iski value hamesha 0 and 1 ke beech mai hi aayegi
//abhi agar hume dice game banana hai for eg then tabhi hum math.random ko *10 kardenge toh decimal value ek position se right mai shift hojayega

console.log(Math.random()*10);//-> 6 etc



//for setting a range in math.random fucntion  
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))); //formula hai learn it but abhi bhi iska o/p 10 ke neeche upar hi aarha hai but hame 10 ke neeche nahi chaiye
console.log(Math.floor(Math.random()*(max-min+1)+min));//-> above 10 random values
