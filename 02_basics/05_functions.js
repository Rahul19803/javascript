// if suppose we made an shopping application where the user is just keep on adding the number of quantities then whatever fucntion we wrote earlier will not work so in this we will learn that


// first lets see the normal one 
/*function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(200));//-> 200
*/


// now lets some advanced version of it 

function calculateCartPrice(...num1){    //-> we are using the spread operator
    return num1
}

console.log(calculateCartPrice(200,200,30,300,229));//-> [ 200, 200, 30, 300, 229 ]



// now we will see how to pass an object into an function

const user={
    username: "rahul",
    price: 199
}


//Creating this ,so that any object written in this code can be execueted by this fucntion 
function handleobject(anyobject){  
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleobject(user);//-> username is rahul and price is 199





// we can do same in array

const newArray=[200,400,100,900]

function returnSecondValue(getArray){
    return getArray[1]

}
console.log(returnSecondValue(newArray));//-> 400