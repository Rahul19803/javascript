/*let myDate=new Date()
console.log(myDate);//->2024-07-14T13:53:10.439Z
console.log(myDate.toString());//->Sun Jul 14 2024 13:51:56 GMT+0000
console.log(myDate.toDateString());//->Sun Jul 14 2024
console.log(myDate.toLocaleDateString());//->7/14/2024 */



// if when building an app we want to compare time difference between the logins or submit btn etc.

let myCreatedDate= new Date("2024-07-14")

let myTimeStamp= Date.now()


console.log(myCreatedDate.getTime());
console.log(myTimeStamp);
