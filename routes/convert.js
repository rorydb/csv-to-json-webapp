var express = require('express');
var router = express.Router();

router.use('/plainText', require('./conversions/plainText'));
router.use('/remote', require('./conversions/remote'));
router.use('/fileUpload', require('./conversions/fileUpload'))

module.exports = router;
