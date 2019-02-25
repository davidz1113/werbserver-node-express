const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//expres hbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // res.send('Hola mundo')
    res.render('home', {
        nombre: 'David Carvajal urbina chavez'
    });
});

app.get('/about', (req, res) => {
    // res.send('Hola mundo')
    res.render('about');
});




app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto 3000');

});