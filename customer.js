var stripe = require("stripe")("sk_test_kkFteL1XTrNcIZEgHxeCZfV1");

module.exports.createCustomer = function(token, email) {
    stripe.customers.create({
        source: token,
        description: email
    });
};

module.exports.chargeCustomer = function(amount, customer) {
    stripe.charges.create({
        currency: "usd",
        amount: amount,
        customer: customer.id
    });
};
