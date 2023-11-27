const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

//the port that this app will use
const port = process.env.PORT || 3000;

//Creating an instance of express app,
const app = express();

//linking routes.js (API routes) to server.js (app.js)
const routes = require('./routes.js');

//setting up middleware
app.use(cors());
app.use('/', routes);
app.use(bodyParser.json());
app.use(morgan('combined'));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});