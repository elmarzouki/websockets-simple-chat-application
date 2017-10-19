var server = require('ws').Server;
var serve = new server({ port: 5001 })

serve.on('connection', function(wsos){
    wsos.on('message', function(message) {
        console.log('Received:', message);

        if(message === 'Hello') {
            wsos.send('Hey there from the server!');
        }
    });
});