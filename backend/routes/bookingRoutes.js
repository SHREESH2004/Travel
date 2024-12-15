// backend/routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// POST route to create a booking and generate invoice
router.post('/create', bookingController.createBooking);

module.exports = router;
