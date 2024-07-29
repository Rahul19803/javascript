// if


const isuserLoggedin= true
const temperature=21
if(temperature < 50){
    console.log("temperture is 41");
}else{
    console.log("temp is high");
}


const score = 200
if(score > 100){
    const power = "fly"  /*yaha pe agar var use karenge const ke badle toh joh scope ke bahar
    console log likha hai woh bhi excuete hoga qki var ka scope globa hai but let and const ka 
    scope global nahi hai*/
    console.log(`user power is :${power}`);
}
//console.log(`user power is :${power}`);



//nesting

const balance = 2000
if(balance<750){
    console.log("bank balance is high");
}else if(balance > 1000){
    console.log("bank balance too high");
}else{
    console.log("bank balamce is stable");
}

//Scenario :- where customer is loggining and has debit card for purchasing

const userloggedin = true
const debitcard= true
//abhi what if user is logged in from google or email qki dono mai se koi bhi chalega
const isloggedIngoogle= true
const isloggedInemail=true

if(isloggedIngoogle || isloggedInemail){ // here any one should be true to get execueted
    console.log("user logged in")
}

if(userloggedin && debitcard ){ //if any of statment is not true then it will not be executed
    console.log("allow to buy course");
}else{
    console.log("incorrect info");
}



