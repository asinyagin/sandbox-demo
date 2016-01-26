var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send("Hello from the sandbox!");
});

app.post('/', function(req, res) {
  res.json({
    id: req.body.id,
    jsonrpc: '2.0',
    result: true
  });
});

app.listen(8081, '0.0.0.0');