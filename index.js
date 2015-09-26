var path = require('path');
var express = require("express");
var app = express();
var routes = require('./routes.js')(express);

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")));
app.use(routes);
app.use(function(req, res, next){
    res.status(404);
    res.render('404', { url: req.url });
});

app.listen(process.env.PORT || 8080);
