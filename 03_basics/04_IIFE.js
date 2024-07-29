// Immediately Invoked function Expression (IIFE)

// means jaise hi function likha usse immediately excuete karwana hai 

//many times we make a file jisme sirf db connection hi hai and we want jaise hi hamari application start hi woh waise hi us file ke andar db connection start ho jaye

// and dusra reason hai ki hame global scope se pollution nahi chaiye hota hai 



/*
function chai(){
    console.log(`DB connected`);
}
chai()
*/

//USING IIFE
(function chai(){
    //named iife
    console.log(`DB connected`);
})(); //-> from prev file we have learnt this //-> DB connected //semicolon is imp to end that iffe

//using arrow function 
((name)=>{
    //unamed iife
    console.log(`DB connected 2 ${name}`);
}
)('rahul');


