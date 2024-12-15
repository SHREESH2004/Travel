// backend/routes/packageRoutes.js
const express = require('express');
const router = express.Router();
const { getPackages, createPackage, updatePackage, deletePackage } = require('../controllers/packageController');

// Get all packages
router.get('/', getPackages);

// Create new package
router.post('/', createPackage);

// Update a package
router.put('/:id', updatePackage);

// Delete a package
router.delete('/:id', deletePackage);

module.exports = router;
