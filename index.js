var path = require('path');
var express = require("express");
var bodyParser = require('body-parser');
var customer = require('./customer.js');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/payment.html', function(req, res) {
	var stripeToken = req.body.stripeToken;
	customer.create(stripeToken);
});

app.use(function(req, res, next){
    res.status(404);
    res.render('404', { url: req.url });
});

app.listen(process.env.PORT || 8080);
