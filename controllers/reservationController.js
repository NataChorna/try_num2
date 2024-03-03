const Reservation = require('../models/reservation');

//to list all reservations
exports.listAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find().populate('classroom', 'name location');
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

//get reserv by id
exports.getReservationById = async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id).populate('classroom', 'name location');
        if (!reservation) {
            return res.status(404).send({ message: 'Reservation not found' });
        }
        res.status(200).json(reservation);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

//to create a new reserv
exports.createReservation = async (req, res) => {
    const reservation = new Reservation();
    reservation.user = req.body.user;
    reservation.classroom = req.body.classroom;
    reservation.startTime = req.body.startTime;
    reservation.endTime = req.body.endTime;
    reservation.status = req.body.status;

    try {
        const newReservation = await reservation.save();
        res.status(201).json(newReservation);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

//update an existing reserv
exports.updateReservation = async (req, res) => {
    try {
        const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!reservation) {
            return res.status(404).send({ message: 'Reservation not found' });
        }
        res.status(200).json(reservation);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

//delete the reserv
exports.deleteReservation = async (req, res) => {
    try {
        const reservation = await Reservation.findByIdAndDelete(req.params.id);
        if (!reservation) {
            return res.status(404).send({ message: 'Reservation not found' });
        }
        res.status(200).send({ message: 'Reservation deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
