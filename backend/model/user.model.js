const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    enum: ['work', 'school', 'friends', 'family'],
    required: true,
  },
  booked_slots: {
    type: [String],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
