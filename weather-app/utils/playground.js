setTimeout(() => {
    console.log("Your time is UP");
}, 2000);


const geoCode = (searchString, callback) => {

    setTimeout(() => {
        const data = {
            lat: 0,
            lon: 0
        };

        callback(data);
    }, 2000);
    
};

geoCode('philly', (data) => {
    console.log("the data is: ", data);
});

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a+b);
    }, 2000)
};

const res = add(4, 5, (sum) => {
    console.log(sum);
});

