var app = require('express')(),
    os = require("os");

app.get('/', function(req, res) {
    res.end([
        'DATE: ' + new Date().toIsoString(),
        'HOST: ' + os.hostname()
    ].join('\n'));
});

app.listen(80);