

import express from 'express';
import bodyParser from 'body-parser';
import router from './router/router.js';
import cors from 'cors'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.use('/', router)
app.use(express.static('../client'));

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
