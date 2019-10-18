const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const server = express();
const cors = require('cors');

server.use(cors());
server.use(bodyParser.json());
const port = 8008

console.log(server)
//defining routes
const users = require('./routes/api/v1/users');

server.use('/api/v1/users', users);

const db_config = require('./config/keys').mongoURI;

//connect to mongo
mongoose.connect(db_config, { useNewUrlParser: true }).then(() => {
    console.log('connected')
}).catch(err => console.log(err))

//connect to port
server.listen(port, () => {
    console.log(`port number ${port}`);
})