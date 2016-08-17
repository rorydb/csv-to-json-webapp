var express = require('express');
var router = express.Router();
var multer = require('multer');

var destination = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/csv');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now())
    }
  }),
})
.single("csv");

var Converter = require("csvtojson").Converter;

/* POST Remote URL */
router.post('/', destination, function(req, res, next) {

});

module.exports = router;