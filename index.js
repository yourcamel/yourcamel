var path = require('path');
var express = require("express");
var bodyParser = require('body-parser');
var customer = require('./customer.js');
var app = express();
var fs = require('fs');
var https = require('https');

var server = https.createServer({
    key: fs.readFileSync('./ssl/www_yourcamel_com.key'),
    certificate: fs.readFileSync('./ssl/yourcamel.crt'),
    ca: [fs.readFileSync('./ssl/gdb1.crt'), fs.readFileSync('./ssl/gdb2.crt'), fs.readFileSync('./ssl/gdb3.crt')]
}, app);


server.listen(process.env.PORT || 443);

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/payment.html', function(req, res) {
	customer.create(req.body.stripeToken, function() {
		res.redirect("https://yourcamel.com");
	});
});

app.use(function(req, res, next){
    res.status(404);
    res.render('404', { url: req.url });
});
