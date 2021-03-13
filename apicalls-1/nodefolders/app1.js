let month = "February";
let day = "3";
let year = "2021";
console.log(day, year); // IBDMAS
console.log(month + " " + day + " " + year); //String Concat
console.log(`${month} ${day}, ${year}`); //Template Literals


// !== or === To check if  var has same data type//

// if(day == 3){
//     console.log("First Day");

// }
// else if (day == 2) {
//     console.log("Second Day");
// }


// for statements
// let names = "Jace"
// for (index = 0; index < names.length; index++){
//     console.log(`${index} = ${names[index]}`);
// }

// for (letter of names){
//     console.log(letter);
// }

// let stud = {
//     id: "4200",
//     name: "Jace",
//     course: "BSIT",
// }

// for (property in stud){
//     console.log(stud[prop]);
// }

function testOne() {
    console.log("Hello");
}

//function expression
const testTwo = function(){
    console.log("Bye");
}

const testThree = () => console.log("Arrow");
const testFour = fname => console.log(`Firstname = ${fname}`);
testFour("Jace");

testOne(); 
testTwo(); 
testThree();