

const Appointment = require('../model/Appointment.model');

const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createAppointment = async (req, res) => {
    const { user, slot, date, isBooked } = req.body;
  
    try {
      const newAppointment = new Appointment({
        user,
        slot,
        date,
        isBooked,
      });
  
      await newAppointment.save();
      res.status(201).json(newAppointment);
    } catch (error) {
      console.log(error); 
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }; 

const updateAppointment = async (req, res) => {
  const appointmentId = req.params.appointmentId;
  const { slot } = req.body;

  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      {
        slot,
      },
      { new: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    res.status(200).json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteAppointment = async (req, res) => {
  const appointmentId = req.params.appointmentId;

  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(appointmentId);

    if (!deletedAppointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    res.status(200).json(deletedAppointment);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment,
};