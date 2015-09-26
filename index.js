var path = require('path');
var express = require("express");
var body-parser = require('body-parser');
var app = express();
var paymentRoutes = require('./routes/payment.js');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")));
app.use(body-parser.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/views/your_camel.html"));
});

app.use("/payment", paymentRoutes);

app.use(function(req, res, next){
    res.status(404);
    res.render('404', { url: req.url });
});

app.listen(process.env.PORT || 8080);
