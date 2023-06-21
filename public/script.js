var socket = io();
var btn = document.getElementById('btn');
var msgList = document.getElementById('msgList');
var inputMsg = document.getElementById('inputMsg');




// btn.addEventListener('click', ()=>{
//     socket.emit('msg_from_client', ()=>{
//         {msg : x}
//     })
    
// })
btn.onclick = () => {
    console.log(inputMsg.value);
    socket.emit('msg_from_client', 
        {msg : inputMsg.value}
    )
}

// socket.on('from_server', ()=>{
//     var div = document.createElement('div');
//     div.innerText = 'Received from server';
//     document.body.appendChild(div);
// })

socket.on('msg_rcvd',(data)=>{
    console.log(data.msg);
    var listMsg = document.createElement('li');
    listMsg.innerText = data.msg;
    msgList.appendChild(listMsg);
})