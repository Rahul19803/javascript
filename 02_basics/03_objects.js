//There are 2 ways to declare an object
//1 - Literal ki tarah --> yaha pe singleton nahi banta
//2 - Constructor ki tarah --> yaha pe singleton banta hai


//Object literals //Objects can contain diffrent datatypes
const JsUser = {
    names: 'Rahul',
    age: '18',
    location: 'mumbai',
    isLoggedIn: false,
    LastLogginDays:["MOn","tue","wed"]
}

//accessing the objects
//1st method
console.log(JsUser.age);//-> 18

//2nd Method
console.log(JsUser["age"]);//-> 18
// why this above line is effecient because when we have define something in an object using by doube quotes then we cannot acces that object using JsUser.age directly , we will have to use this one so it is recommended to use this type

//overriding the objects
JsUser.location="banglore"
console.log(JsUser);

//freezing the objects
//Object.freeze(JsUser) //-> abhi isko comment kiya hai coz fir aage ke operations nahi ho paayenge
JsUser.location="mumbai"//-> it will still show banglore as it is freezed



//Adding function to the object
JsUser.greetings= function(){
    console.log("HELLO WORLD");
}
console.log(JsUser.greetings());


//Greeting the name from the object and in this we will use backticks
JsUser.greetings2 = function(){
    console.log(`hello Js user,${this.names}`);
}

console.log(JsUser.greetings2());//-> hello Js user,Rahul