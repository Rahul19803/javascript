//for
/*
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(i);
}
    */




//using if inside for
/*
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(i);
    if(i == 5){
        console.log("5 is the best number");
    }
    
}
    */


//nested for loops


for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(`outer loop is : ${i}`);
    for (let j = 0; j < 10; j++) {
        const element = j;
        //console.log(`inner loop ${j}`);
        console.log(i + '*' + j + '=' + i*j);
    }
}

let myarray=["superman","batman","flash"]

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
}





// break and continue

/*
for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log(`value 5 detected`);
        break // will go out of the loop
    }
    const element = (`value of i is ${index}`);
    console.log(element);
}
*/

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log(`value 5 detected`);
        continue // will skip this part and the loop will continue
    }
    const element = (`value of i is ${index}`);
    console.log(element);
}