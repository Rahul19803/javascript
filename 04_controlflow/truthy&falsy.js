//it means ki hum consider karlete hai ki value joh hai variable ke andar woh true hi hai

const email={}

if(email){
    console.log("got user email");
}else{
    console.log("not got");
}//-> got user email 
// abh agar yaha empty string pass karnege toh false coz no value meanes 
//we wil assume false hai toh else condition will get execueteed 
//ya ek array bhi pass karenge tabhi woh excuete hoga
//coz hum maan ke chal rahe hai ki email joh hai woh true hai 


//Falsy values
/*
-> false
-> 0
-> -0
-> BigInt
-> " "
->null
-> undefined
-> Nan
*/

//truthy values
/*
->"0","false" -> coz it is in a string then it is true 
->[]
->{}
->fucntion(){}
*/


//if we want to detect that array or object is empty or not coz of truthy and falsy values

const emptyarray=[]

if(emptyarray == 0){
    console.log("array is empty");
}

//obj

const emptyobj={}

if(Object.keys(emptyobj).length==0){
    console.log("empty obj");
}