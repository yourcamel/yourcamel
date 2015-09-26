module.exports = function(express) {
    var router = express();

    router.get("/", function(req, res) {
        res.sendFile(__dirname + "/views/index.html");
    });

    router.get("/payment", function(req, res) {
        res.sendFile(__dirname + "/views/payment.html");
    });

    return router;
};
