const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    classroom: {
        type: Schema.Types.ObjectId,
        ref: 'Classroom',
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['occupied', 'available'],
        default: 'occupied'
    }
});

module.exports = mongoose.model('Reservation', reservationSchema);
