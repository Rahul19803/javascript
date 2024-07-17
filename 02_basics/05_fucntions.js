//Functions
/*
function sayMyName(){
    console.log('r');
    console.log('a');
    console.log('h');
    console.log('u');
    console.log('l');
}

sayMyName()d
*/




//adding two numbers
function addTwoNumbers(number1, number2){
    console.log(number1 + number2); 
}

//addTwoNumbers(2,2)
//above method is right but the problem comes when we store the value of the function into an diff variable and we check the value is stored in that result,o/p will come as the function is passed but the varibale will not store that value

function addTwoNumbers(number1, number2){
    console.log(number1 + number2); 
}

const result=addTwoNumbers(2,2)//-> 4
console.log(result);//-> undefined
//to resolve this we declare that varibale in the function itself and we eill return that variable


function addTwoNumbers(number1, number2){
    let result=number1+number2
    return result
}

console.log("Result", result);//-> 4

// we can also do it in in the diffrent way

function addTwoNumbers(number1, number2){
    return number1+number2

}
console.log(addTwoNumbers(2,3)); 
// in this the memory will be saved.





/*
function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("rahul"))//-> Rahul just logged in
console.log(loginUserMessage(""))//-> just logged in
console.log(loginUserMessage())//-> undefined just logged in
*/
// so in this case this fucntion is showing undefined just logged in which we donot want when the user passes the empty string so we will use if else statement to overcome this 

function loginUserMessage(username){
    if(username === undefined){         //-> or we can write it as if(!username)
        console.log("please enter a username!");
        return
    }
    return `$(username) just logged in`
}
console.log(loginUserMessage());//-> please enter a username!
                                //   undefined