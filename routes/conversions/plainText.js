var express = require('express');
var router = express.Router();
var Converter = require("csvtojson").Converter;

/* POST Plain Text. */
router.post('/', function(req, res, next) {
  var csvtojson = new Converter({});
  var csvText = req.body["csv-text"];

  csvtojson.fromString(csvText, function(err, result) {
    if (err) {
        console.log(err);
        res.send(err);
    } else {
        res.send(JSON.stringify(result));
    }
  });
});

module.exports = router;