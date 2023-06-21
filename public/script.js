var socket = io();
var btn = document.getElementById('btn');

btn.onclick = () => {
    socket.emit('from_client');
}

socket.on('from_server', ()=>{
    var div = document.createElement('div');
    div.innerText = 'Received from server';
    document.body.appendChild(div);
})