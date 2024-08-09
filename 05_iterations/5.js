//filter

const myNums= [1,2,3,4,5,6,7,8,9]

const newNums=myNums.filter( (nums) => nums > 5 )
console.log(newNums);
//filter use karne pe ek callback function diya jaayega and fir deni padhti ek condition



//abhi ek problem aata hai isme lets see
const MyNumber=[1,2,3,4,5,6,7,8,9]

/*

newNumber=MyNumber.filter((alpha)=> {
    //alpha > 8      //yeh nahi likh sakte due to of scopes
    return alpha < 8 //hamesha return karna padega if it is in the scopes
})

console.log(newNumber);
*/


// we can also do this by applying foreach()

const newNumber=[]
MyNumber.forEach((num)=>{
    if (num > 8) {
        
        newNumber.push(num)
    }
})
console.log(newNumber);
