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
