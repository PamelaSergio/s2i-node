var express = require('express'),
 app = express(),
 port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || '8080',
 ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.use('/', function (req, res, next) {
 console.log("A new request received at " + Date.now());
 next();
});

app.get('/', function (req, res) {
 res.send('Hello from Jalapenos!\n ' + new Date());
});

app.listen(port, ip);