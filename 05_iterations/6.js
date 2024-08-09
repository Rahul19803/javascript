//maps

const newNumbers = [1,2,3,4,5,6,7,8,9,10]


number=newNumbers.map((num) => num + 10 )
console.log(number);//  
/*[
11, 12, 13, 14, 15,
16, 17, 18, 19, 20
]*/




//CHAINING

const myNumers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumers
                .map((num) => num * 10)//phele yeh execute hoga 
                .map((num)=> num + 1)//upar ka new value yaha aake modify hoga
                .filter((num)=> {return num > 40})

console.log(newNums);
