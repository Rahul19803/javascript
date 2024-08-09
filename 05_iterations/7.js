//Reduce


const myNums = [1,2,3,4]


//using fucntions
const myTotal=myNums.reduce(function(accumalator , currentValue) {
    console.log(`accumalator:${accumalator} and currentValue :${currentValue}`);
    
    return accumalator + currentValue
},0)// 0 is the initial Value

console.log(myTotal);//-> 10
/* accumalator:0 and currentValue :1
accumalator:1 and currentValue :2
accumalator:3 and currentValue :3
accumalator:6 and currentValue :4
10 */


//using arrow fucntion

const newTotal = myNums.reduce( (acc,curr) => acc + curr , 0)// O is the initial value
console.log(newTotal);
//10


const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "python course",
        price : 999
    },
    {
        itemName : "mobile course",
        price: 5999
    },
    {
        itemName : "data science course",
        price: 12999
    }
]

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(total);
