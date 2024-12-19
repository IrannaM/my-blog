import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import router from './router/router.js';

const app = express();

//Parses the text as Json and URL encoded data
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

// app.use(expressValidation());
app.use('/', router);

app.use(express.static('../client'));

//start server using listen function
app.listen(5000, () => {
  console.log('Server is running on', 5000);
});

// Db Connection
mongoose.connect('mongodb://localhost:27017/blog');
//using event emitter
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected sucessfully  ');
});
