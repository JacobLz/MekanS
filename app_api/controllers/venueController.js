var mongoose = require('mongoose');
var Venue = mongoose.model('Venue'); // Şemayı çağırıyoruz

// ORTAK FONKSİYON: JSON Cevaplayıcı
var createResponse = function(res, status, content) {
    res.status(status).json(content);
};

// 1. MEKANLARI LİSTELE (Ana Sayfa İçin)
var listVenues = async function(req, res) {
    try {
        // Veritabanından 'Venue' modelini kullanarak tüm kayıtları bul
        const venues = await Venue.find().exec();
        
        // Eğer hiç mekan yoksa boş dizi döner [], hata vermez.
        createResponse(res, 200, venues);
    } catch (error) {
        createResponse(res, 404, {"status": "Hata oluştu", "error": error});
    }
};

// 2. YENİ MEKAN EKLE (Veri Girmek İçin)
var addVenue = async function(req, res) {
    try {
        // Gelen veriyi (req.body) veritabanına kaydet
        const venue = await Venue.create(req.body); 
        createResponse(res, 201, venue);
    } catch (error) {
        createResponse(res, 400, {"status": "Ekleme başarisiz", "error": error});
    }
};

// ... Diğer fonksiyonlar (get, update, delete) şimdilik dursun ...
// Sadece bu ikisini dışarı açalım şimdilik.

module.exports = {
    listVenues,
    addVenue
};