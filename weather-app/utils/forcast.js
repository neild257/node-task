const keys = require('../keys');
const request = require('request');

const forcast = (lat, lon, callback) => {
    const URL = `https://api.darksky.net/forecast/${keys.mapsDarkSkyAccessToken}/${lat},${lon}`;

    request.get({ url: URL, json: true }, (err, res) => {
        if(err) {
            callback("Unable to fetch weather data");
        } else if(res.body.error) {
            callback("Unable to fetch weather data due to bad request");
        } else {
            callback(undefined, `${res.body.daily.data[0].summary} ${res.body.currently.precipProbability}` );
        }
    });
};

module.exports.forcast = forcast;