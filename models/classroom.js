const mongoose = require('mongoose');

const classroomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    capacity: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    equipment: [{
        type: String
    }]
    
});

module.exports = mongoose.model('Classroom', classroomSchema);
