let path = require('path');

let http = require('http');
let server = http.createServer();

let express = require('express');
let app = express();

let socketio = require('socket.io');

server.on('request', app);

let io = socketio(server);

let inMemoryDrawHistory = [];

server.listen(1337, function () {
  console.log('The server is listening on port 1337!');
});

app.use(express.static(path.join(__dirname, 'browser')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', function (socket) {
  console.log(socket.id, 'connected');

  socket.emit('load', inMemoryDrawHistory);

  socket.on('draw', function (start, end, color) {
    inMemoryDrawHistory.push({
      start: start,
      end: end,
      color: color
    });
    socket.broadcast.emit('draw', start, end, color);
  });

  socket.on('disconnect', function () {
    console.log('Goodbye, ', socket.id, ' :(');
  });
});

