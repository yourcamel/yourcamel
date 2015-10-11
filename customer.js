var stripe = require("stripe")("sk_live_KbvCRgwALgACxygTnaXL0Ds8");

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
