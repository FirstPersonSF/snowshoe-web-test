// LIBS
// ======================================

var express = require('express');
var path = require('path');
var router = express.Router();

// GLOBAL ROUTE
// ======================================

// route all traffic to the angular app
router.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/../../public/app/views/index.html'));
});

module.exports = router;
