// promisifying the writing and reading of files
const fs = require('fs');
const { promisify } = require('util');

const writeAsync = promisify(fs.writeFile);


writeAsync('sample.txt', 'This has been written Async!')
    .then(() => console.log('Sucess creating new file'))
    .catch((err) => console.log(`Error creating file ${err.message}`));


// converting a callback structure to promises by using promisify in the node library
// const { promisify } = require('util');

// const delay = (seconds, callback) => {
//     if(seconds > 3) {
//         callback(new Error(`${seconds} is too long!`));
//     } else {
//         setTimeout(() => {
//             callback(null, `Resolved after ${seconds} seconds.`);
//         }, seconds * 1000);
//     }
// };


// delay(2, (error, result) => {
//     if(error) {
//        console.log(`error: ${error}`); 
//     } else {
//         console.log(`result: ${result}`); 
//     }
// });

// const delayPromise = promisify(delay);

// delayPromise(4)
//     .then((res) => console.log(`result: ${res}`))
//     .catch((err) => console.log(`error: ${err}`));

// console.log('End');

// const delay = (seconds) => {
//     return new Promise((resolve, reject) => {
//         seconds > 3 ? reject(new Error(`${seconds} is too long!`)) : setTimeout(() => {
//             resolve('Resolved after 1 sec.');
//         }, seconds * 1000);
//     });
// };


// // Just providing the function as console.log will take one argument too.
// delay(4)
//     .then(console.log)
//     .then(() => 3)
//     .then((number) => console.log(`The Number is: ${number}`))
//     .catch((err) => console.log(`error: ${err.message}`));

// console.log('End');

// const handleString = (str, done) => {
//     process.nextTick(() => {
//         done(str.replace(/[a-zA-Z]/g, 'X'));
//     });
// }

// handleString('Hello World', (replacedString) => {
//     console.log(replacedString);
// });

// console.log('End');


