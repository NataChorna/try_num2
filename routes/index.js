const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const classroomRoutes = require('./routers/classroomRoutes');
const reservationRoutes = require('./routers/reservationRoutes');
const userRoutes = require('./routers/userRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use('/api/classrooms', classroomRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/users', userRoutes);

//test routes
app.get('/', (req, res) => {
    res.send('Reservation System');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
