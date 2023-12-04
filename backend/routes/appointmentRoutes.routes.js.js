
const express = require('express');
const router = express.Router();
const {
  getAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} = require('../controllers/appointmentController');


router.get('/', getAppointments);

router.post('/', createAppointment);


router.put('/:appointmentId', updateAppointment);


router.delete('/:appointmentId', deleteAppointment);

module.exports=router;