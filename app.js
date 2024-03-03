const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const connectDB = require("./mongoConnection");

// імпорт маршрутів
const classroomRoutes = require("./routes/classroomRoutes");
const reservationRoutes = require("./routes/reservationRoutes");
const userRoutes = require("./routes/userRoutes");
const classroom = require("./models/classroom");
const reservation = require("./models/reservation");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(express.static("public"));

app.set("view engine", "pug");
// використання маршрутів
app.use("/api/classrooms", classroomRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/users", userRoutes);

// Запуск 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.render("layout");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.get("/classrooms", async (req, res) => {
  const classrooms = await classroom.find();
  res.render("classroomList", {
    classrooms,
  });
});

app.get("/classrooms/reserve", async (req, res) => {
  res.render("reserveClassroom");
});

app.get("/reservations", async (req, res) => {
  const reservations = await reservation.find();
  res.render("reservationList", {
    reservations,
  });
});
