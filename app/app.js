var express = require('express');
var reload = require('reload');
var app = express();
var dataFile = require('./data/data.json');
var io = require('socket.io')();

app.set('port', process.env.PORT || 4000 );
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.setTitle ='Infinity';
app.locals.allemployees = dataFile.employees;

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/employees'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'app/app.js');
});

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

io.attach(server);
io.on('connection', function(socket) {
  socket.on('postMessage', function(data) {
    io.emit('updateMessages', data);
  });
});

reload(server, app);
