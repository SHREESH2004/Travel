// backend/utils/invoiceGenerator.js
const PDFDocument = require('pdfkit');
const fs = require('fs');

const generateInvoice = (bookingDetails, filePath) => {
  const doc = new PDFDocument();

  // Pipe the PDF to a writable stream (save it as a file)
  doc.pipe(fs.createWriteStream(filePath));

  // Add some content to the PDF
  doc.fontSize(25).text('Booking Invoice', { align: 'center' });

  doc.moveDown();

  // Booking details
  doc.fontSize(15).text(`Booking ID: ${bookingDetails.bookingId}`);
  doc.text(`User Name: ${bookingDetails.userName}`);
  doc.text(`Package Name: ${bookingDetails.packageName}`);
  doc.text(`Price: $${bookingDetails.price}`);
  doc.text(`Booking Date: ${new Date(bookingDetails.bookingDate).toLocaleDateString()}`);

  doc.moveDown();

  // Optional: Add some more info or footer
  doc.fontSize(12).text('Thank you for booking with us!', { align: 'center' });

  // Finalize the PDF and end the document
  doc.end();
};

module.exports = generateInvoice;
