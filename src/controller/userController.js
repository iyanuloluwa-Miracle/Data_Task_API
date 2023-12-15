require("../model/database");
const User = require('../model/userModel');
const sectorsConfig = require('../config/sectorsConfig');

const createUser = async (req, res) => {
  try {
    const { name, sectors, agreeToTerms } = req.body;

    if (!name || !sectors || !agreeToTerms) {
      return res.status(400).json({ error: 'All fields are mandatory' });
    }

    // Check if the provided sector is valid
    if (!sectorsConfig.includes(sectors)) {
      return res.status(400).json({ error: 'Invalid sector' });
    }

    const newUser = new User({ name, sectors, agreeToTerms });
    const savedUser = await newUser.save();

    res.json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findOne({ userId });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, sectors, agreeToTerms } = req.body;

    if (!name || !sectors || !agreeToTerms) {
      return res.status(400).json({ error: 'All fields are mandatory' });
    }

    // Check if the provided sector is valid
    if (!sectorsConfig.includes(sectors)) {
      return res.status(400).json({ error: 'Invalid sector' });
    }

    const updatedUser = await User.findOneAndUpdate({ userId }, { name, sectors, agreeToTerms }, { new: true });

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createUser, getUser, updateUser };
