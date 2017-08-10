var app = require('express')();
var http = require('http').Server(app);
var cards = require('./service/cards');
var io = require('socket.io')(http);
var cors = require('cors');
var startActivity = require('./service/fakeActivity');

app.use(cors());

app.get('/', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(cards);
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});

startActivity(io);