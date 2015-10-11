var stripe = require("stripe")("pk_test_Q6VYCrGf0Bjh89cUzy0cYUu9");

module.exports.create = function(stripeToken) {
    stripe.customers.create({
        source: stripeToken
    }).then(function(customer) {

    }).then(function(charge) {
    });
};

module.exports.charge = function(amount, customer) {
    stripe.charges.create({
        currency: "usd",
        amount: amount,
        customer: customer.id
    });
};
