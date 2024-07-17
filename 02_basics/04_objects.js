// Now in this we will see how we can declare the object using Construcutor

/*const tinderUser= new Object()

console.log(tinderUser);//-> {} empty object but this way of defining the object is known as singleton
*/

const tinderUser={}
tinderUser.id="abc"
tinderUser.name="rahul"
tinderUser.isloggedIn="false"
console.log(tinderUser);//-> { id: 'abc', name: 'rahul', isloggedIn: 'false' }

//Nesting of objects

const regularUser={
    email:"abc@gmail.com",
    fullname: {
        userFullname:{
            firstname:"rahul",
            secondname:"Chaudhary"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userFullname);
console.log(regularUser.fullname.userFullname.firstname);




//combining the 2 obj
const obj1={a:1,b:2,c:3}
const obj2={d:4,e:5,f:6}

const obj3=Object.assign(obj1,obj2);
console.log(obj3);//-> { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
// above method is fine but we can use new method which is spread

const obj4={...obj1,...obj2}
console.log(obj4);//-> { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }




//now suppose we have multiple users loggedin to the system then we can use array to store the objects and ofc it will be stored in the key value pair 
const users=[
    {
        name : "rahul",
        age: "18"
    },
    {
        name : "rahul",
        age: "21"
    },
    {
        name : "rahul",
        age: "22"
    }
]

const info=users[1].age
console.log(info);

//if we want all the keys from the tinderusers
console.log(Object.keys(tinderUser
));//-> [ 'id', 'name', 'isloggedIn' ]
//same goes for values

console.log(Object.values(tinderUser));//-> [ 'abc', 'rahul', 'false' ]


// if we want all the entries from the tinderuser then

console.log(Object.entries(tinderUser));//-> the o/p will be in the array within array  , [ [ 'id', 'abc' ], [ 'name', 'rahul' ], [ 'isloggedIn', 'false' ] ]




