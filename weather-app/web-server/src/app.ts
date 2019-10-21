import path from 'path';

import express from 'express';
import hbs from 'hbs';

const app = express();

const PORT = process.env.PORT || 3000;

// path to public folder to serve the static content
const publicPath = path.join(__dirname, '../public');

// path to templates/views folder for the handlebars
const viewsPath = path.join(__dirname, '../templates/views');

// path to templates/partials folder for the handlebars
const partialsPath = path.join(__dirname, '../templates/partials');

// setting up express for handlebars
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// setting up express for serving static content
app.use(express.static(publicPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Dynamic Content by Handlebars',
        name: 'Harshit Pareek'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Harshit Pareek'
    });
});

app.get('/help', (req, res) => {
    res.render('about', {
        title: 'Help',
        name: 'Harshit Pareek'
    });
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