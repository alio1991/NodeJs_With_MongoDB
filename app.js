const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// const localRoutes = require('./routes/post-example-routes');
const ddbbRoutes = require('./routes/ddbb-routes');
dotenv.config();
const uri = process.env.MONGO_URI_PART_1+process.env.DB_NAME+process.env.MONGO_URI_PART_2;
//db
mongoose.connect(uri+process.env.MONGO_EXAMPLE_URI, 
                {useNewUrlParser: true }).then(()=> console.log('CONNECTED TO DATABASE: '+process.env.DB_NAME));
mongoose.connection.on("error", err => {console.log('DB connection error:'+err.message)});

//Routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', ddbbRoutes);
app.listen(process.env.PORT, ()=> console.log(`listen ${process.env.PORT} port`));
