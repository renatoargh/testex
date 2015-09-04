var app = require('express')();

app.get('/', function(req, res) {
    res.end('TESTEX!');
});

app.listen(80);