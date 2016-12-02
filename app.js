var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')

var index = require('./routes/index');


var port = 3000;

var app = express();

// tells the system views are in the views folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);

app.listen(port, function() {
    console.log('SERVER GOOD TO GO ' + port)
});
