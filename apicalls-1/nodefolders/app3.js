const fs = require('fs');

//readFile
// fs.readFile('./notes1.txt', {encoding: 'utf8' }, (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//     console.log(data);
//     }

// });

//writeFile (Will erase everything and add the paramater)
// fs.writeFile('./notes1.txt', 'Dodong Laboriki', () => {
//     console.log("successful write");

// });

//appendFile

// fs.appendFile('./notes1.txt', '\n\nHey Bitch\n', (err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('append successful');
//     }

// });

const readStream = fs.createReadStream('./longText.txt');
readStream.on('data', (chunk) => {
    console.log('\n************NEW DATA****************\n\n');
    console.log(chunk.toString());
})