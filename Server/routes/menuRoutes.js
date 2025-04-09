const express = require('express');
const router = express.Router();
const Menu = require('../models/menuSchema');
const cloudinary = require('../cloudinaryConfig');
const streamifier = require('streamifier');
const mongoose = require('mongoose');
const multer = require('multer')
// Get all menu items

// Multer setup for in-memory storage (since we're uploading directly to Cloudinary)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST: Create Menu Item with Cloudinary Image Upload
router.post('/menu', upload.single('image'), async (req, res) => {
  const { itemName, category, price, available } = req.body;
  try {
      let imageUrl = null;

      if (req.file) {
          // Use streamifier to handle buffer upload
          console.log("Uploading to Cloudinary...");
          const result = await new Promise((resolve, reject) => {
              const uploadStream = cloudinary.uploader.upload_stream(
                  { folder: 'menu-items' },
                  (error, result) => {
                      if (error) reject(error);
                      resolve(result);
                  }
              );
              streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
              console.log("Upload resultudinary...");
          });

          imageUrl = result.secure_url;
          console.log(req.file);
      }

      const newItem = new Menu({ itemName, category, price, available, image: imageUrl });
      await newItem.save();
      res.status(201).json(newItem);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});


router.get('/menu/me', async (req, res) => {
    try {
        const menu = await Menu.find();
        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
  
// Get a single menu item
router.get('/menu/:id', async (req, res) => {
    try {
        const id = req.params.id;

        // Check if the id is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid menu item ID format' });
        }

        const menuItem = await Menu.findById(id);
        if (!menuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        res.json(menuItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// Similarly, apply the same logic in the PATCH route
router.patch('/menu/:id', upload.single('image'), async (req, res) => {
  const { id } = req.params;
  const { itemName, category, price, available } = req.body;

  try {
      let image = req.body.image;

      if (req.file) {
          const result = await new Promise((resolve, reject) => {
              const uploadStream = cloudinary.uploader.upload_stream(
                  { folder: 'menu-items' },
                  (error, result) => {
                      if (error) reject(error);
                      resolve(result);
                  }
              );
              streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
          });

          image = result.secure_url;
      }

      const updatedItem = await Menu.findByIdAndUpdate(
          id,
          { itemName, category, price, available, image },
          { new: true }
      );

      if (!updatedItem) {
          return res.status(404).json({ message: 'Item not found' });
      }

      res.status(200).json(updatedItem);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});
  
// Delete menu item (DELETE)
router.delete('/menu/:id', async (req, res) => {
  const { id } = req.params;

  // Validate the ID (optional but recommended)
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: 'Invalid item ID' });
  }

  try {
      const deletedItem = await Menu.findByIdAndDelete(id);
      if (!deletedItem) {
          return res.status(404).json({ message: 'Item not found' });
      }
      res.status(200).json({ message: 'Item deleted successfully', deletedItem });
  } catch (error) {
      console.error('Error deleting item:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});
module.exports = router;