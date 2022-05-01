const express = require('express');
const dotenv = require('dotenv');
const userRoutes=require('./routes/userRoutes');

const app = express();
dotenv.config();

app.get('/',(req,res)=>{
    res.send('API is running');
});

app.use('/api/users');

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));