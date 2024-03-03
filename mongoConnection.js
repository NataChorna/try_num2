const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://vverych:Pasc8FqLWZA6iRsQ@cluster0.u6wsxnf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoDB);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});


//WAS CHANGED