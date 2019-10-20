const keys = require('../keys');
const request = require('request');

const forcast = (lat, lon, callback) => {
    const url = `https://api.darksky.net/forecast/${keys.mapsDarkSkyAccessToken}/${lat},${lon}`;

    request.get({ url, json: true }, (err, res) => {
        const { body } = res;
        if(err) {
            callback("Unable to fetch weather data");
        } else if(res.body.error) {
            callback("Unable to fetch weather data due to bad request");
        } else {
            callback(undefined, `${body.daily.data[0].summary} ${body.currently.precipProbability}` );
        }
    });
};

module.exports.forcast = forcast;