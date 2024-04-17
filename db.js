const mongoose = require('mongoose');
// define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels' // Replace 'mydatabase ' with your database name

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;

db.on('connected', ()=>{
    console.log('connected to MongoDB server');
})

db.on('error', (err)=>{
    console.error('MongoDB connection Error:',err);
})

db.on('disconnceted', ()=>{
    console.log('mongoDB disconnected');
})

// export the database connection 

module.exports =db;
