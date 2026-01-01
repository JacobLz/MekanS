var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

// veri tabanı bağlantısı ?
require('./app_api/models/db');

// rotalar burda . 
var apiRouter = require('./app_api/routes/index')



