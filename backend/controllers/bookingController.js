// backend/controllers/bookingController.js
const Booking = require('../models/Booking');
const Package = require('../models/Package');
const generateInvoice = require('../utils/invoiceGenerator');
const path = require('path');

// Create a new booking and generate an invoice
exports.createBooking = async (req, res) => {
  const { userId, packageId } = req.body;

  try {
    // Find the package details
    const packageDetails = await Package.findById(packageId);
    if (!packageDetails) {
      return res.status(404).json({ message: 'Package not found' });
    }

    // Create and save the booking
    const newBooking = new Booking({
      userId,
      packageId,
      price: packageDetails.price,  // Assuming price is a field in the Package model
      bookingDate: new Date(),
    });

    await newBooking.save();

    // Create booking details for the invoice
    const bookingDetails = {
      bookingId: newBooking._id,
      userName: 'John Doe', // Replace with actual user name (e.g., from your User model)
      packageName: packageDetails.name,
      price: packageDetails.price,
      bookingDate: newBooking.bookingDate,
    };

    // Generate the invoice
    const invoiceFilePath = path.join(__dirname, '../invoices', `${newBooking._id}_invoice.pdf`);
    generateInvoice(bookingDetails, invoiceFilePath);

    // Send response
    res.status(201).json({
      message: 'Booking created and invoice generated',
      invoicePath: invoiceFilePath,  // Return the file path or URL to the frontend
    });

  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Failed to create booking' });
  }
};
