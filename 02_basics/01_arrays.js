// array
// javascript array are resizable

// whenever performing array-copy operations javascripts creates a shallow copies

const myArr=[0,1,2,"rahul",4]
console.log(myArr[3]);//-> rahul
 //diffrent types of declaring an array are:-
const myHeros=["ironman","shaktiman"]
const myArr2=new Array(1,2,3,4)

console.log(myArr2[1]);//-> 2

// Array methods
    //push and pop
myArr.push(3)
console.log(myArr);//-> [0,1,2,'rahul',4,3]
myArr.push(4)
console.log(myArr);//-> [0,1,2,'rahul',4,3,4]

myArr.pop()
console.log(myArr);// ->[ 0, 1, 2, 'rahul', 4, 3 ] this will just remove the last value from the list

  //shift and unshift
myArr.unshift(9)//-> this will add 9 in just starting of the array
console.log(myArr);//-> [ 9, 0, 1, 2, 'rahul', 4, 3 ]

myArr.shift()//-> this will just remove that 9 from the array
console.log(myArr);//-> [ 0, 1, 2, 'rahul', 4, 3 ]

console.log(myArr.includes(9));//-> this includes checks if the array consist of number 9 or not and as per that it will return the value true or false


const newArr= myArr.join()//-> Adds all the elements of an array into a string, separated by the specified separator string.

console.log(newArr);//-> 0,1,2,rahul,4,3
console.log(typeof(newArr));//-> string


//slice  and  Splice
console.log("A",myArr)//-> A [ 0, 1, 2, 'rahul',4,3 ]
const myn1=myArr.slice(1,3)
console.log(myn1);//-> [1,2]
// this only returns the starting numbers from 1 to 4 in which 4 will not be inculded 


console.log("B",myArr);//-> B[ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3)//-> This changes the orginal value of the array and will delete all the values of the indexes mentioned by us
// and this is the difference between the slice and splice


console.log(myn2);//-> [ 1, 2, 'rahul' ]
// this will return the value of the starting index and the ending address which is mentioned
console.log(myArr);//-> [ 0, 4, 3 ]

//Og array-> [ 0, 1, 2, 'rahul', 4, 3 ]
//array after splice ->  [ 0, 4, 3 ]

