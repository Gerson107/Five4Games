<<<<<<< HEAD
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
=======
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
>>>>>>> 9fa70d7e6eeb1a3dea1c4b923d90b97db86a38b4
