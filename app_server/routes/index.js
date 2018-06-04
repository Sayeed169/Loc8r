var express = require('express');
var router = express.Router();

var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

// Location page
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new',ctrlLocations.addReview);

// Router page
router.get('/about',ctrlOthers.about);

module.exports = router;
