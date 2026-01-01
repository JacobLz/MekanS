var mongoose = require('mongoose');

// localhost arada çalışmıyor sebebine bak , şimdilik Localhost yerine 127.0.0.1 .
var dbURI = 'mongodb://127.0.0.1/mekans'; 

mongoose.connect(dbURI);

// Bağlantı kuruldu mesajı.
mongoose.connection.on('connected', function () {
    console.log('Mongoose bağlandı: ' + dbURI);
});

// Hata mesajı.
mongoose.connection.on('error', function (err) {
    console.log('Mongoose bağlantı hatası: ' + err);
});

// Bağlantı koptu mesajı.
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose bağlantısı kesildi');
});

require('./venue');