//express imports the express library.
const express  = require('express');
// socketIO imports the socket.io library.
const socketIO = require('socket.io');
// Importing the readcommand library. Used to read the command line.
const readcommand = require('readcommand');

// the () invokes the express function. If not () then it will be a function object.
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// set up routes and middleware
app.get('/', (req, res) => {
  res.send('Hello, Terminal App!');
});

// set up socket.io connection
io.on('connection', (socket) => {
  console.log('a user connected!');

  // Socket event handlers go here

  socket.on('disconnect', () => {
    console.log('A user has disconnected');
  });
});

readcommand.loop(function(err, args, str, next) {
  // Handle the command logic here
  console.log('Command:', args);
  next();
});

// set up server
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

