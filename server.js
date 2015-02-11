var express = require('express');

var app = express();

app.use('/js', express.static(__dirname + '/js/'))
app.use('/css', express.static(__dirname + '/css/'))
app.use('/bower', express.static(__dirname + '/bower/'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

app.listen(5000, function() {
  console.log('listening...');
})
