//for of

//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greeting="heelo world!"
for (const greet of greeting) {
    console.log(`each char is ${greet}`);
}


//maps ... it is a key value pair
//koi bhi duplicate values milti nahi hai isme saare unique values hi milti hai 
const map = new Map()
map.set("IN","INDIA")
map.set("USA","UNinsjs")
map.set("fr","France")

//console.log(map);

for (const [key, value] of map) {
    console.log(key,':-',value);
    
}//IN :- INDIA
//USA :- UNinsjs
//fr :- France


const obj={
    'game1':'NFS',
    'game2':'spiderman'
}
for (const [key,value] of obj) {
    console.log(key,':-',value);
     
}//->TypeError: obj is not iterable




/* arrays ke upar loop lagana hai toh for of loop
and agar objects ke upar lagana hai toh for in loop*/