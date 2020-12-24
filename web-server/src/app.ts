import path from 'path';

import express from 'express';
import hbs from 'hbs';

// internal imports
import geoCode  from './utils/geoCode';
import forcast from './utils/forcast';

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
        name: 'Harshit Pareek',
        aboutText: 'This is About Text'
    });
});

app.get('/help/', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Harshit Pareek',
        helpText: 'This is Help Text'
    });
});

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        res.send({
            error: 'The query string is not valid'
        })
    }

    geoCode(req.query.address, (gecodeErr: any, geoCodeRes: any) => {
        if(gecodeErr) {
            res.send({
                error: 'Error while fetching the results'
            });
        }
        
        forcast(geoCodeRes.lat, geoCodeRes.lon, (forcastErr: any, forcastRes: any) => {
            if(forcastErr) {
                res.send({
                    error: 'Error while fetching the forcast'
                });
            }
            res.send({
                forcast: `${forcastRes}`,
                address: req.query.address
            });
        });
    });
});

// doing the query string without body parser in node
app.get('/product', (req, res) => {
    if(!req.query.search) {
        res.send({
            error: 'The search string is not defined'
        });
    }
    else {
        res.send({
            message: `The result has been processed with ${req.query.search}`
        });
    }
});

app.get('/help/*', (req, res) => {
    res.render('404Page', {
        error: 'Help article not found',
        name: 'Harshit'
    });
});

app.get('*', (req, res) => {
    res.render('404Page', {
        error: 'Page Not Found 404 Error',
        name: 'Harshit'
    });
});

app.listen(PORT, () => {
    console.log(`App has started on ${PORT}`);
});