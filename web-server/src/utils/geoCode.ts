import request from 'request';
import * as keys from '../../../weather-app/src/keys';  

const geoCode = (searchString: string, callback: any) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchString)}.json?access_token=${keys.geoCodeKeys.geoCodeAccessToken}&limit=1`;
    
    request.get({ url, json: true }, (err, res) => {
        const { body } = res;
        if (err) {
            callback("Unable to fetch the weather data");
        } else if(res.body.features.length === 0) {
            callback("Something went wrong in the request");
        } else {
            const lon = body.features[0].center[0];
            const lat = body.features[0].center[1];
            callback(undefined, { lat, lon });
        }
    });
};

export default geoCode;