//console.log(addOne(1))
function addOne(num){
    return num + 1;
}
//console.log(addOne(1)); // here i can call the fucntion before it it written

//another way of defining the fucntion is by putting it into the variable 


console.log(addTwo(1)); // error coz we have asssinged addTwo to the variable
const addTwo=function(num){
    return num + 2;
}
//console.log(addTwo(1));//-> 3 