// veritabanı şablon kurllar vs . (kısaca veritabanı filtresi)

var mongoose = require('mongoose'); // kütüphaneleri birden fazla yerde çağırmak performansa etki etmez node.js ilk seferkini cache eder.

//  Mekanın içinde yorumlar listesi olacak.
var reviewSchema = new mongoose.Schema({
    author: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    reviewText: { type: String, required: true },
    createdOn: { type: Date, default: Date.now } // Tarih vermez ise şimdiki zamanı al
});

//  Çalışma Saatleri (burayı tekrar gözden geçir .)
var hourSchema = new mongoose.Schema({
    days: { type: String, required: true },
    opening: String,
    closing: String,
    isClosed: { type: Boolean, required: true }
});

//  Ana mekan
var venueSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: String,
    rating: { type: Number, default: 0, min: 0, max: 5 },
    foodanddrink: [String], // Dizi: ['Çay', 'Kahve']
    
    // KOORDİNATLAR (sınavda çıakbilir buraya tekrar dikkat et)
    // Coğrafi veriler için özel format
    coords: {
        type: [Number], 
        index: '2dsphere' // Dünya yuvarlaktır indeksi !!!
    },
    
    // diğerleri 
    hours: [hourSchema],
    reviews: [reviewSchema]
});

//  Mongoose'a kaydet
mongoose.model('Venue', venueSchema);