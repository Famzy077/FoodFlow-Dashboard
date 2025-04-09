// models/profilePictureSchema.js
const mongoose = require('mongoose');

const ProfilePictureSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  img: { type: String, required: true }, // Cloudinary image URL
});

const ProfilePicture = mongoose.model('ProfilePicture', ProfilePictureSchema);
module.exports = ProfilePicture;
