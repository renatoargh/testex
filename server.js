var app = require('express')(),
    os = require("os");

app.get('/', function(req, res) {
    res.end('HOST: ' + os.hostname());
});

app.listen(80);