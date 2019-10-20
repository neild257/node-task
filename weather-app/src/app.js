const { geoCode } = require('./utils/geoCode');
const { forcast } = require('./utils/forcast');

forcast(-75.7088, 44.1545, (err, res) => {
    console.log('Error', err);
    console.log('Data', res);
});