const accountId= 123456
let accountEmail="jebcec@google"
var accountPass="98765"
accountCity="bengaluru" // javascript isse bhi as a variable hi leta hai but yeh prac wrong hai

// accountId=345322 // not allowed
accountEmail="gyhecbu@google"
accountPass="1234"
accountCity="kolkata"
console.log(accountId);

/* 
  we prefer not to use VAR because of issue in the block scope 
  and funtional scope 
*/

// abhi ek ek karke kon likhega console.log baar baar isliye ek method hai sabko ek saath excuete karne ka
console.table([accountEmail,accountId,accountPass,accountCity])