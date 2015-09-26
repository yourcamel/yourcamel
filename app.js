var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/yourcamel/payment.html");
});

app.use(express.static(__dirname + "/yourcamel"));
app.listen(3000);
