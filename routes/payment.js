var customer = require("../customer.js");
var router = require('express').Router();
var path = require('path');

router.get("/", function(req, res) {
    var token = req.body.token;
    var email = req.body.email;

    customer.createCustomer(token, email);

    res.redirect("../");
});

router.post("/register", function(req, res) {
    var cvc = req.body.cvc;
    var number = req.body.number;
    var expMonth = req.body.expMonth;
    var expYear = req.body.expYear;

    res.end();
});

router.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, '../', 'views/register.html'));
});

router.get("/pay", function(req, res) {
    var amount = req.body.amount;
    var customer = req.body.customer;

    customer.charge(amount, customer);

    res.redirect("../");
});

module.exports = router;
