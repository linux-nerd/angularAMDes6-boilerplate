var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/components', express.static(__dirname + '/components'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/partials', express.static(__dirname + '/partials'));
app.use('/files', express.static(__dirname + '/files'));
app.use(bodyParser.json());
app.use(session({secret: 'ssshhh'}));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendfile('index.html', { root: __dirname });
});

app.listen(9004, function(){
	console.log("listening to port 9004");
}); //the port you want to use
