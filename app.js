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


