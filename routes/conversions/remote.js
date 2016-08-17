var express = require('express');
var router = express.Router();
var request = require('request');
var Converter = require("csvtojson").Converter;

/* POST Remote URL */
router.post('/', function(req, res, next) {
  var csvtojson = new Converter({});
  var csvURL = req.body["url-text"];

  request
    .get(csvURL)
    .on('response', function(response) {
      response.pipe(csvtojson);

      csvtojson.on("end_parsed", function(jsonObj) {
        res.send(JSON.stringify(jsonObj));
      })
    });
});

module.exports = router;