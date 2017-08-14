var app = require('express')();
var http = require('http').Server(app);
var cards = require('./service/cards');
var io = require('socket.io')(http);
var cors = require('cors');

var startActivity = require('./service/fakeActivity');
var { getCardsDelay } = require('./service/delay');

app.use(cors());

// Change public to build in production. Cors importing only needed in development.
app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, '../client/public/index.html'));
});

app.get('/cards', function(req, res){
  setTimeout(function() {
    res.setHeader('Content-Type', 'application/json');
    res.send(cards);
  }, getCardsDelay);
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});

startActivity(io);