var stripe = require("stripe")("pk_live_XPUUXHSOAay2N3hf2jpMyqry");

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
