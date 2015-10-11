var stripe = require("stripe")("sk_test_kkFteL1XTrNcIZEgHxeCZfV1");

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
