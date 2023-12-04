

const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  slot: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isBooked: {
    type: Boolean,
    default: false,
  },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports=Appointment;