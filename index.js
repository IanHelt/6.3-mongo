var express = require('express');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = require('./routes.js');
var app = express();
app.engine('handlebars', handlebars({'defaultLayout': 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: false}))
router(app);
mongoose.connect('mongodb://localhost:27017/test');

app.listen(3000);
