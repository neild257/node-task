import path from 'path';

import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicPath));

app.get('', (req, res) => {
    res.render('index');
});

app.get('/weather', (req, res) => {
    res.send({
        forcast: 'All clear with no probabilty of rain.',
        location: 'Los Angeles'
    });
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/about.html"));
});

app.get('/help', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/help.html"));
});

app.listen(PORT, () => {
    console.log(`App has started on ${PORT}`);
});