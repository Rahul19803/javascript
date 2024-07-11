/* stack(primitive) -> means whatever variable we have declared we get a copy of that  
 
heap(Non-primitive) -> means whenever a meomory is defined under heap like array or object from that we get reference from the original value means joh bhi change karenge woh original vlue mai change hoga */

// lets see  a example
/*---STACK---*/

let myName="rahul"
let newName=myName
newName="Chaudhary"

console.log(myName); //-> Rahul
console.log(newName); //-> Chaudhary

// what happend here is whatever changes im making to the new variable is not affecting to the old variable
// the value of old variable remains the same as we it is stack datatype in which we get a copy of the old variable that we have created and changes are made on that copy if thier is any

// --- HEAP ---//

let userOne = {
    email:"dev@google.com",
    upi:"ysbu.yshbs"
    
}
let userTwo=userOne //-> email:"dev@google.com",
                    //upi:"ysbu.yshbs"
                    //Now here the actual value of userOne is stored into the userTwo
userTwo.email="gvvhb.googe.com"//This email will be also be changed into the og one
console.log(userOne);//->gvvhb.googe.com
//https://excalidraw.com/#json=edyrXXpU1N1MMNRP4_CXU,WH7Y2L2xh_RrTWOlRedg5Q
