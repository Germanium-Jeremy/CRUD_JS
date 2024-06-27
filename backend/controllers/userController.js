
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({ email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.MYSECRET, { expiresIn: '1h' });

    res.status(201).json({ token, user: { id: user._id, email } });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

module.exports = { signup };