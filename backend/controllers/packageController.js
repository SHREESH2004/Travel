// backend/controllers/packageController.js
const Package = require('../models/Package');

// Get all packages
exports.getPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new package
exports.createPackage = async (req, res) => {
  const { name, price, description, image } = req.body;
  try {
    const newPackage = new Package({ name, price, description, image });
    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create package' });
  }
};

// Update package
exports.updatePackage = async (req, res) => {
  try {
    const updatedPackage = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPackage);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update package' });
  }
};

// Delete a package
exports.deletePackage = async (req, res) => {
  try {
    await Package.findByIdAndDelete(req.params.id);
    res.json({ message: 'Package deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Failed to delete package' });
  }
};
