var stripe = require("stripe")("sk_test_kkFteL1XTrNcIZEgHxeCZfV1");

module.exports.create = function(callback, email, cvc, number, expMonth, expYear) {
    stripe.customers.create({
          email: email
    }).then(function(customer) {
        callback();
    });
};

module.exports.charge = function(amount, customer) {
    stripe.charges.create({
        currency: "usd",
        amount: amount,
        customer: customer.id
    });
};
