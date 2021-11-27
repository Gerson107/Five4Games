const express = require('express')
const App = express()
const cors = require('cors')


//settings
App.set('port', process.env.port||1000)
console.log('puerto conectado');

//middlewares union de servidor a servidor
App.use(cors());
App.use(express.json());

//routes
App.use('/api/articulo', require('./Routes/articulo'));

module.exports = App