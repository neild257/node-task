// Testing the https core module
import https from 'https';
import * as keys from '../../../src/keys';
const url = `https://api.darksky.net/forecast/${keys.geoCodeKeys.mapsDarkSkyAccessToken}/40,-75`; 

https.request(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    res.on('error', (err) => {
        console.log(err);
    });

    res.on('end', () => {
        const result = JSON.parse(data);
        console.log(result);
    });
}).end();


/**
 * Other playground code.
 */

// setTimeout(() => {
//     console.log("Your time is UP");
// }, 2000);


// const geoCode = (searchString, callback) => {

//     setTimeout(() => {
//         const data = {
//             lat: 0,
//             lon: 0
//         };

//         callback(data);
//     }, 2000);
    
// };

// geoCode('philly', (data) => {
//     console.log("the data is: ", data);
// });

// const add = (a, b, callback) => {
//     setTimeout(() => {
//         callback(a+b);
//     }, 2000)
// };

// const res = add(4, 5, (sum) => {
//     console.log(sum);
// });

