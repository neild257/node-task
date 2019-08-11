const request = require('request');

const URL = 'https://api.darksky.net/forecast/57ba552b33f718df6509922e2067f00b/37.8267,-122.4233';

request.get(URL, (err, res) => {
    console.log(res);
});