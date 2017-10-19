var username = prompt("what's your name fella?");
var ws = new WebSocket('ws://localhost:5001');
var log = document.getElementById('log');
ws.onopen = function(event) {
    ws.send(JSON.stringify({
        type: 'username',
        username: username
    }));
};
ws.onmessage = function (event) {
    console.log(event);
    var json = JSON.parse(event.data);
    log.innerHTML += json.username + ": " + json.chatMessage + '<br/>';
}

document.querySelector('button').onclick = function() {
    // ws.send('Hello');
    var text = document.getElementById('text').value;
    // ws.send(text);
    ws.send(JSON.stringify({
        type: 'chatMessage',
        chatMessage: text
    }))
    log.innerHTML += 'You: ' + text + '<br/>';
}
