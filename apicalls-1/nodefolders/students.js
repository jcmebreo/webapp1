const names = ['John', 'Jace', 'Johnny', 'Papi'];
const students =[
    {fname: names[0], age: 20, course: 'iChef'},
    {fname: names[1], age: 21, course: 'IT'},
    {fname: names[2], age: 23, course: 'MLS'},
    {fname: names[3], age: 24, course: 'iChef'},
];

const greet = function(str = null){
    console.log(`Hello ${str}`);
}

module.exports = {names, students, greet}; 