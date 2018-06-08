var ws = new WebSocket('ws://localhost:5001');
var log = document.getElementById('log');
// ws.onopen = function(event) {
//     // alert('Socket connected successfully!');
//     setTimeout(function() {
//         ws.send('Wassup mate?');
//     }, 1000);
// };
ws.onmessage = function (event) {
    console.log(event);
    log.innerHTML += event.data + '<br/>';
}

document.querySelector('button').onclick = function() {
    // ws.send('Hello');
    var text = document.getElementById('text').value;
    ws.send(text);
}
