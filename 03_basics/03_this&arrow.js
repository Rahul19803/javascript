const user = {
    username:"rahul",
    age:18,

    welcomeMeassage: function() {
        console.log(`${this.username} welcome to the club `); // using this keyword means refering to the current context i.e current curly braces
        console.log(this);// checking what it prints // rahul welcome to the club 
        /*
         rahul welcome to the club {
          username: 'rahul',
          age: 18,
          welcomeMeassage: [Function: welcomeMeassage]
        }
        // since the name of changed to sam
        
        sam welcome to the club
        {
        username: 'sam',
        age: 18,
        welcomeMeassage: [Function: welcomeMeassage]
        }

        */  
    // this is the o/p of using THIS basically it gives the content of the current context
        }
}
//user.welcomeMeassage();
//user.username="sam"
//user.welcomeMeassage()

// but what if we print THIS outsode of this scope

console.log(this);//-> it gives an empty string because it in node environment which has no current context

// excueting the THIS in an function 
function chai(){
    console.log(this);
}
chai()//-> now it gives some THIS methods






// functions ke ander mai this use nahi kar sakta 
function chai(){
    console.log(this.username);
}
chai()//-> undefined


/////////arrow function//////


const coffee = ()=> {    // this is arrow function 
    let username = " rahul"
    console.log(this.username);
}  // arrow fucntion mai THIS use nahi kar sakte 

const addthree=(num1,num2,num3) => {
    return num1+num2
}
console.log(addthree(1,2,3)) //-> 3

//implicit return 
// we dont need to write return in this 
const addTwo=(num1,num2,num3) => (num1+num2)
console.log(addthree(1,2,3)) //-> 3