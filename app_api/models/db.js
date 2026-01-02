// database bağlantıları .
var mongoose = require('mongoose'); // mongodb için ODM (Object Data Modeling) kütüphanesi.

// localhost arada çalışmıyor sebebine bak , şimdilik Localhost yerine 127.0.0.1 .
var dbURI = 'mongodb://127.0.0.1/mekans'; 

mongoose.connect(dbURI);

// Bağlantı kuruldu mesajı.
mongoose.connection.on('connected', function () {
    console.log('Mongoose bağlandi: ' + dbURI);
});

// Hata mesajı.
mongoose.connection.on('error', function (err) {
    console.log('Mongoose bağlanti hatasi: ' + err);
});

// Bağlantı koptu mesajı.
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose bağlantisi kesildi');
});

require('./venue.js'); // veritabanı şemaları.