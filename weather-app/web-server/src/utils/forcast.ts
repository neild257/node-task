import * as keys from '../../../src/keys';
import request from 'request';   

const forcast = (lat: number, lon: number, callback: any) => {
    const url = `https://api.darksky.net/forecast/${keys.geoCodeKeys.mapsDarkSkyAccessToken}/${lat},${lon}`;

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

export default forcast;