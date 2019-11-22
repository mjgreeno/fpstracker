const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

//load env
dotenv.config({path: './config.env'});

const app = express();

//dev logging
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
//Routes
app.use('/api/v1/profile', require('./routes/profile'));

const port = process.env.PORT || 8000;

app.listen(5000, () =>{
   console.log(`Sever running in ${process.env.NODE_ENV} mode on port ${port}`);
});