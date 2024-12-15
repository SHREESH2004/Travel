// backend/routes/adminRoutes.js
const express = require('express');
const router = express.Router();

// Example Admin route (to be expanded)
router.get('/dashboard', (req, res) => {
  res.json({ message: 'Admin Dashboard' });
});

module.exports = router;
