<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
=======
const App = require('./App'); 
require ('./Database');

async function main(){
    await App.listen(App.get('port'));
    console.log('servidor en puerto', App.get('port'));
}

main()
>>>>>>> 9fa70d7e6eeb1a3dea1c4b923d90b97db86a38b4
