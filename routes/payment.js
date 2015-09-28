var customer = require("../customer.js");
var router = require('express').Router();
var path = require('path');

router.post("/register", function(req, res) {
    var cvc = req.body.cvc;
    var number = req.body.number;
    var expMonth = req.body.expMonth;
    var expYear = req.body.expYear;
    var email = req.body.email;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    
    customer.create(function() {
        res.redirect("https://yourcamel.herokuapp.com");
    }, email, cvc, number, expMonth, expYear);
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
