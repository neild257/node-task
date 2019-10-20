const request = require('request');
const { geoCode } = require('./utils/geoCode');
const keys = require('./keys');

geoCode("Los Angles", (err, res) => {
    console.log(res);
    const URL = `https://api.darksky.net/forecast/${keys.mapsDarkSkyAccessToken}/${lat},${lon}`;

    request.get({ url: URL, json: true }, (err, res) => {
        const data = res.body;
        console.log("data si", data);
    });
});
