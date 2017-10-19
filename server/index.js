var server = require('ws').Server;
var serve = new server({ port: 5001 })

serve.on('connection', function(wsos){
    wsos.on('message', function(message) {

        message = JSON.parse(message);

        if(message.type == 'username') {
            wsos.username = message.username;
            return;
        }

        console.log('Received:', message);

        serve.clients.forEach(function(client) {
            if(client != wsos) { client.send(JSON.stringify({
                username: wsos.username,
                chatMessage: message.chatMessage
            })); }
        });

        // wsos.send('Message repeated from the server: ' + message);
    });

    wsos.on('close', function() {
        console.log('A client disconnected');
    });


    console.log('one more client connected!');

});