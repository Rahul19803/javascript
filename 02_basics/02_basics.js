// if we want to attach the 2 arrays together then


const marvel_heros=["ironman","batman","spiderman"]

const dc_heros=["superman","batman","flash"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);
//-> [ 'ironman', 'batman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
// Now here dc_heros are in the array of marvel_heros and they are acting as an element of that marvel_heros

//lets see
console.log(marvel_heros[3][1]);//-> batman

// it means we are accessing the 3 element and in that 3rd element we are accessing the first element

//Therfore we use concat method

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);//-> [ 'ironman', 'batman', 'spiderman', 'superman', 'batman', 'flash' ]




//There is one more operator to concatinate the strings and that is Spread method

const newAllHeros = [...marvel_heros, ...dc_heros]
console.log(newAllHeros);//-> [ 'ironman', 'batman', 'spiderman', 'superman', 'batman', 'flash' ]

// we are using this method because we can add and concatinate n number of arrays



//if there are multiple arrays into an array means arrays within arrays then we use method called flat
const newArray=[1,2,3,[4,5,6],7,[8,9,10],[11,12,13,14]]
const anothernewArray= newArray.flat()
console.log(anothernewArray);/*-> [
    1,  2, 3,  4,  5,  6,
    7,  8, 9, 10, 11, 12,
   13, 14
 ] */




console.log(Array.isArray("rahul"))//-> false
console.log(Array.from("rahul"));//-> this creates the entire entity into an array [ 'r', 'a', 'h', 'u', 'l' ]


//putting multiple varibales into a
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
console.log();

