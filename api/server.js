const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const PokeRouter = require('../routers/pokemon-router');
const server = express();

//global middleware
server.use(express.json()); //middleware needed to parse JSON
server.use(helmet()); //middleware that adds a layer of security to the server
server.use(cors()); //middleware that allows cross domain communication from the browser

//endpoints
server.get('/', (req, res) => {
  res.status(200).json({ welcome: `to the danger zone!` });
});

//routes
server.use('/api/pokemon', PokeRouter);

module.exports = server