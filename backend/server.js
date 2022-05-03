const express = require('express');
const dotenv = require('dotenv');
const userRoutes=require('./routes/userRoutes');
const notes = require('./data/notes');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();
dotenv.config();

connectDB();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('API is running');
});

app.get('/api/notes',(req,res) => {
    res.json(notes);
});

app.use('/api/users',userRoutes);

const PORT = process.env.PORT || 5000;

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`Server started on port ${PORT}`));