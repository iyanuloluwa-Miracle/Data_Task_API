const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const sectorsConfig = require('../config/sectorsConfig');

const userSchema = new mongoose.Schema({
  userId: { type: String, default: uuidv4 },
  name: { type: String, required: true },
  sectors: {
    type: [{
      type: String,
      enum: sectorsConfig,
    }],
    required: true,
  },
  numberOfSelectedSectors: { type: Number, required: true },
  agreeToTerms: { type: Boolean, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
