

/*
var http = require('http');
var express = require('express');
var app = express();
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
//app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');
http.createServer(app).listen(app.get('port'), app.get('ip'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
app.get('/', function (req, res) {
  res.send('Hello World!');
});
*/


/*
var express = require('express'),
    fs = require('fs'),
    app = express();

var app = express();

var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


app.get('/', function(req, res) {
    res.send('Hello from NodeJS  at '+ new Date());
});


app.listen(8080, ip);

module.exports = app;
*/

var express = require('express'),
 app = express(),
 port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || '8080',
 ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', function (req, res) {
 res.send('Hello from Jalapenos!\n ' + new Date());
});

app.listen(port, ip),
function(){
  console.log('Express server listening on port ' + app.get('port'))
};