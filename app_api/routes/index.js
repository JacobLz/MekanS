var express = require('express');
var router = express.Router();

var ctrlVenues = require('../controllers/venueController.js');

// ROTALAR

// 1. '/venues' adresine GET gelirse -> Listele
// 2. '/venues' adresine POST gelirse -> Ekle
router
  .route('/venues')
  .get(ctrlVenues.listVenues)
  .post(ctrlVenues.addVenue);

// Modülü dışarı aç 
module.exports = router;