var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

// veri tabanı bağlantısı ?
require('./app_api/models/db');

// rotalar burda . 
var apiRouter = require('./app_api/routes/index')

var app = express();

// ayarlar 

app.use(logger('dev')); /* logger */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

app.use('/api', apiRouter); /* "/api" ler "apiRouter" */

// module.exports = app; (bunu unutup kuruluma devam edersen nolur hatırla)

app.listen(3000, function() {
    console.log("---------------------------------------------------");
    console.log(" Sunucu çalişti: http://localhost:3000/api/venues");
    console.log("---------------------------------------------------");
});



