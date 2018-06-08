var server = require('ws').Server;
var serve = new server({ port: 5001 })

serve.on('connection', function(wsos){
    wsos.on('message', function(message) {
        console.log('Received:', message);
        wsos.send('Message repeated from the server: ' + message);
        if(message === 'hello') {
            wsos.send('Server says hello too!');
        }
    });

    wsos.on('close', function() {
        console.log('A client disconnected');
    });


    console.log('one more client connected!');

});