var stripe = require("stripe")("sk_live_KbvCRgwALgACxygTnaXL0Ds8");

module.exports.create = function(stripeToken, callback) {
    stripe.customers.create({
        source: stripeToken
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
