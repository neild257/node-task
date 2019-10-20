const { geoCode } = require('./utils/geoCode');
const { forcast } = require('./utils/forcast');

const address = process.argv[2];

if (address) {
    geoCode(address, (err, geoCodeRes) => {
        if (err) {
            console.log(err);
            return;
        }

        forcast(geoCodeRes.lat, geoCodeRes.lon, (err, forcastRes) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log(forcastRes);
        });
    });
}
else {
    console.log("Please reenter valid arguments for search string");
}