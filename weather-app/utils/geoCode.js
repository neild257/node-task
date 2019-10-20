const request = require('request');
const keys = require("../keys");

const geoCode = (searchString, callback) => {
    const MAP_BOX_URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchString)}.json?access_token=${keys.geoCodeAccessToken}&limit=1`;
    
    request.get({ url: MAP_BOX_URL, json: true }, (err, res) => {
        if (err) {
            callback("Unable to fetch the weather data");
        } else if(res.body.features.length === 0) {
            callback("Something went wrong in the request");
        } else {
            const lon = res.body.features[0].center[0];
            const lat = res.body.features[0].center[1];
            callback(undefined, { lat, lon });
        }
    });
};

module.exports.geoCode = geoCode;