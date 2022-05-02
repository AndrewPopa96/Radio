const express = require('express');
const dotenv = require('dotenv');
const userRoutes=require('./routes/userRoutes');
const notes = require('./data/notes');
const connectDB = require('./config/db');

const app = express();
dotenv.config();

connectDB();

app.get('/',(req,res)=>{
    res.send('API is running');
});

app.get('/api/notes',(req,res) => {
    res.json(notes);
});

// app.use('/api/users');

console.log(process.env);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));