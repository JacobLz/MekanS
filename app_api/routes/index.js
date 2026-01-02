// yönlendirmeler burada . 

var express = require('express');
var router = express.Router(); 

// TEST ROTASI
// '/venues' adresine GET isteği atılırsa
router.get('/venues', function(req, res) {
    // Ekrana JSON formatında cevap bas
    res.status(200).json({
        "durum": "Başarili",
        "mesaj": "MekanS projesi çalişiyor!"
    });
});

// Bu satır olmayınca app.js bu dosyayı okumaz dikat !!! (bu kısmada tekrar bak)
module.exports = router;