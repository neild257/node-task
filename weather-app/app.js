const request = require('request');
const { geoCode } = require('./geoCode');

geoCode("Los Angles", (err, res) => {
    console.log(res);
    // const URL = `https://api.darksky.net/forecast/57ba552b33f718df6509922e2067f00b/${lat},${lon}`;

    // request.get({ url: URL, json: true }, (err, res) => {
    //     const data = res.body;
    //     // console.log("data si", data);
    // });
});

// pk.eyJ1IjoiaGFyczEwMTQiLCJhIjoiY2sxd3E4c2NyMDFiMTNtbzRkeWFtMGlqaCJ9.LliS0Wf3o0pdpN4j4CiU9g

