const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const app = express();

mongoose.connect('mongodb://localhost:27017/blogdb', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api',require('./routes/api'));

app.listen(4000,function() {
  console.log('listening for request');

});
