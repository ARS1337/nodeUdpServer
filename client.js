var buffer = require('buffer');
var udp = require('dgram');
// creating a client socket
var client = udp.createSocket('udp4');



client.on('message',function(msg,info){
  console.log('Data received from server : ' + msg.toString());
  console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
});

console.log('before sending',Date.now())

//sending msg
client.send(Buffer.from(Date.now().toString()),2222,'https://nodeudpserver.herokuapp.com/',function(error){
    console.log('buffer sent',Date.now())
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }
});

var data1 = Buffer.from('hello');
var data2 = Buffer.from('world');

//sending multiple msg
client.send([Buffer.from(`${Date.now()}`)],2222,'localhost',function(error){
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }
});