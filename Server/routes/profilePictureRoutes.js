// routes/profilePicture.js
const express = require('express');
const multer = require('multer');
const cloudinary = require('../cloudinaryConfig');
const ProfilePicture = require('../models/profilePictureSchema');
const router = express.Router();

// Configure multer for file storage
const storage = multer.memoryStorage(); // Storing file in memory before uploading to Cloudinary or similar
const upload = multer({ storage });

router.post('/profilePicture/:userId', upload.single('profilePicture'), async (req, res) => {
  const { userId } = req.params;
  
  // If no file was uploaded
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    // Get the file (it will be available on `req.file`)
    const file = req.file;
    // You can now upload the file to Cloudinary or another storage service
    // For now, we'll just send back the file info
    return res.status(200).json({
      message: 'File uploaded successfully',
      file: file.originalname,
      mimetype: file.mimetype,
      size: file.size
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
});



// Fetch profile picture by userId (GET)
router.get('/profilePicture/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const profilePicture = await ProfilePicture.findOne({ userId });

    if (!profilePicture) {
      return res.status(404).json({ message: 'Profile picture not found' });
    }

    res.status(200).json(profilePicture);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete profile picture by userId (DELETE)
router.delete('/profilePicture/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const profilePicture = await ProfilePicture.findOneAndDelete({ userId });

    if (!profilePicture) {
      return res.status(404).json({ message: 'Profile picture not found' });
    }

    res.status(200).json({ message: 'Profile picture deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;