// const Classroom = require('../models/classroom');

// // to  lsit all the classrooms
// exports.listAllClassrooms = async (req, res) => {
//     try {
//         const classrooms = await Classroom.find();
//         res.status(200).json(classrooms);
//     } catch (error) {
//         res.status(500).send({ message: error.message });
//     }
// };

// //get class by id
// exports.getClassroomById = async (req, res) => {
//     try {
//         const classroom = await Classroom.findById(req.params.id);
//         if (!classroom) {
//             return res.status(404).send({ message: 'Classroom not found' });
//         }
//         res.status(200).json(classroom);
//     } catch (error) {
//         res.status(500).send({ message: error.message });
//     }
// };

// //create a new classroom
// exports.createClassroom = async (req, res) => {
//     const classroom = new Classroom({
//         name: req.body.name,
//         capacity: req.body.capacity,
//         location: req.body.location,
//         equipment: req.body.equipment,
//     });

//     try {
//         const newClassroom = await classroom.save();
//         res.status(201).json(newClassroom);
//     } catch (error) {
//         res.status(400).send({ message: error.message });
//     }
// };

// //update an existing classroom
// exports.updateClassroom = async (req, res) => {
//     try {
//         const classroom = await Classroom.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!classroom) {
//             return res.status(404).send({ message: 'Classroom not found' });
//         }
//         res.status(200).json(classroom);
//     } catch (error) {
//         res.status(500).send({ message: error.message });
//     }
// };

// // Delete a classroom
// exports.deleteClassroom = async (req, res) => {
//     try {
//         const classroom = await Classroom.findByIdAndDelete(req.params.id);
//         if (!classroom) {
//             return res.status(404).send({ message: 'Classroom not found' });
//         }
//         res.status(200).send({ message: 'Classroom deleted successfully' });
//     } catch (error) {
//         res.status(500).send({ message: error.message });
//     }
// };




const Classroom = require('../models/classroom');

// List all classrooms
exports.listAllClassrooms = async (req, res) => {
    try {
        const classrooms = await Classroom.find();
        res.status(200).json(classrooms);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Get a classroom by ID
exports.getClassroomById = async (req, res) => {
    try {
        const classroom = await Classroom.findById(req.params.id);
        if (!classroom) {
            return res.status(404).send({ message: 'Classroom not found' });
        }
        res.status(200).json(classroom);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Create a new classroom
exports.createClassroom = async (req, res) => {
    const classroom = new Classroom({
        name: req.body.name,
        capacity: req.body.capacity,
        location: req.body.location,
        equipment: req.body.equipment,
    });

    try {
        const newClassroom = await classroom.save();
        res.status(201).json(newClassroom);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

// Update an existing classroom
exports.updateClassroom = async (req, res) => {
    try {
        const classroom = await Classroom.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!classroom) {
            return res.status(404).send({ message: 'Classroom not found' });
        }
        res.status(200).json(classroom);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Delete a classroom
exports.deleteClassroom = async (req, res) => {
    try {
        const classroom = await Classroom.findByIdAndDelete(req.params.id);
        if (!classroom) {
            return res.status(404).send({ message: 'Classroom not found' });
        }
        res.status(200).send({ message: 'Classroom deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
