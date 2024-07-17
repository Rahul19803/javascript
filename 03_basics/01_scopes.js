// scopes are of 2 types :- 1) gloabl scope and 2) block scope

/*let a = 10
const b = 20
var c = 30 

console.log(a); //-> 10
console.log(b); //-> 20
console.log(c); //-> 30
*/






/*
if (true){
    let a = 10
    const b = 20
    var c = 30
}
console.log(a); //-> ReferenceError: a is not defined
console.log(b); //-> ReferenceError: b is not defined
console.log(c); //-> 30 //this is the reason we donot use var as it goes outside the block scope
*/


//block scope ke ander ka variables ka values are completely independent of block scope ke bahar ke variables ka value even though if we are using the same variable at both times



let a = 300 //-> defining a global scope
if (true){
    let a = 10  //-> defining a local scope 
    const b = 20
    console.log("inner",a);//-> 10
}
console.log(a); //-> 300
// there for both the values of a are diffrent from each other









// Nested Scopes

function one(){
    const username="rahul"

    function two(){
        const website="utube"
        console.log(username);//-> accesing the variable value from outside of the scope as this fucntion is an child variable so it can access the variable of parent fucntion but it Parent function cannot acces the variable of the child fucntion
    }
    
    two() //-> Rahul
}
one()

if (true){
    const username="rahul"
    if(username=="rahul"){
        const website ="utube"
        console.log(username + website); //-> rahulutube because we have accessed the username from the parent scope
    }
    console.log(website)//-> ReferenceError: website is not defined . This is because we are trying to access that variable outside of its scope
}
console.log(username);//-> ReferenceError: Username is not defined . This is because we are trying to access that variable outside of its scope