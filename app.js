const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


const rotasFilmes = require('./routes/filmes');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extends: false
}));

app.use(bodyParser.json());

app.use('/filme', rotasFilmes);


module.exports = app;