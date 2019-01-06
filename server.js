const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.port || 5000;

const mongooseURI = 'mongodb://127.0.0.1:27017/visionchurch_admin';
mongoose.connect(mongooseURI, {useNewUrlParser: true})
        .then(() => {console.log('Mongoose connection success')})
        .catch(err => {console.log(err)});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Routing
const Main = require('./routes/Main');
app.use('/main', Main);

const Members = require('./routes/Members');
app.use('/member', Members);

app.listen(port, () => {
    console.log('Server is running on port : ' + port);
});
