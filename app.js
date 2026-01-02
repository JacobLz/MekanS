var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

// Veritabanı bağlantısı 
require('./app_api/models/db.js');

// API rotalarını yükle
var apiRouter = require('./app_api/routes/index.js');

var app = express();

// Middleware ayarları
app.use(logger('dev'));                    // Gelen istekleri konsola renkli loglar
app.use(express.json());                   
/* JSON body'leri parse eder (js nesnesine dönüştürür) ,
 req.body ile json verileri js objesi halinden çekerek kullanabiliriz. */
app.use(express.urlencoded({ extended: false })); // Form verilerini parse eder
app.use(cookieParser());                   // Cookie'leri req.cookies'a koyar

app.use(cors());                           /* 
Frontend'in farklı porttan erişimine izin verir (development için geniş açık)*/

// Tüm /api isteklerini apiRouter'a yönlendir
app.use('/api', apiRouter);

// Uygulamayı export et (test ve production için gerekli)
module.exports = app;

// Sadece doğrudan node app.js ile çalıştırıldığında sunucuyu başlatmak için koşullu.
if (require.main === module) {
    const port = 3000;
    app.listen(port, () => { /* function() da olabilirdi ama yerine () => yazımı daha modern ve this kullanımında daha stabilite sunar */
        console.log("---------------------------------------------------");
        console.log(` Sunucu çalişiyor: http://localhost:${port}/api/venues`);
        console.log("---------------------------------------------------");
    });
}