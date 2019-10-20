import path from 'path';

import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.send(`<h2> Node is best in TS</h2>`);
});

app.get('/weather', (req, res) => {
    res.send({
        forcast: 'All clear with no probabilty of rain.',
        location: 'Los Angeles'
    });
});

app.get('/about', (req, res) => {
    res.send(`<h2> About </h2>`);
});

app.listen(PORT, () => {
    console.log(`App has started on ${PORT}`);
});