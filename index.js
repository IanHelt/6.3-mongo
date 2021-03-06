var express = require('express');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = require('./routes.js');
var app = express();

var database = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';
mongoose.connect(database);

app.engine('handlebars', handlebars({'defaultLayout': 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: false}))

router(app);


app.listen(process.env.PORT || 3000);
