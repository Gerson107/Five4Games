const App = require('./App'); 
require ('./Database');

async function main(){
    await App.listen(App.get('port'));
    console.log('servidor en puerto', App.get('port'));
}

main()