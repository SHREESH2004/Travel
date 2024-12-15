const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Package', required: true },
  bookingDate: { type: Date, default: Date.now },
  status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Booking', bookingSchema);
