var express = require('express');
var router = express.Router();
var Converter = require("csvtojson").Converter;
var busboy = require('connect-busboy');
var fs = require('fs');

router.use(busboy({ immediate: true }));

/* POST Remote URL */
router.post('/', function(req, res, next) {
    var savedFilePath = '';

    req.busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
        var path = './public/uploads/csv/' + Date.now() + ' - ' + filename;
        file.pipe(fs.createWriteStream(path));

        savedFilePath = path;
    });

    req.busboy.on('finish', function() {
        var csvtojson = new Converter({});
        
        csvtojson.fromFile(savedFilePath, function(err, result) {
            res.send(JSON.stringify(result));
        });
    })
});

module.exports = router;