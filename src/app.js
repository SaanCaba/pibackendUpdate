const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index.js');
const dotenv = require('dotenv')
dotenv.config()
const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
const whiteList = ['https://demo-front-foodapp.vercel.app/']
const options = {
  origin: (origin, callback) => {
    if(whiteList.includes(origin)){
      callback(null, true);
  }else{
    callback(new Error('no permitido!'));
  }
  }
}
server.use(cors(options))
server.use(morgan('dev'));

// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'https://demo-front-foodapp.vercel.app/'); // update to match the domain you will make the request from
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
