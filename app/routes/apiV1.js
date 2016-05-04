// LIBS
// ======================================

var express = require('express');
var mongoose = require('mongoose');
var request = require('request');
var snowshoe = require('snowshoe');

// ROUTES
// ======================================

var router = express.Router();


router.use(function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Max-Age", "3600");

    next();
});


router.route('/stamp')
  .post(function (req, res, next) {

    var client = new snowshoe.client("9f05abc3838c0f8131ae", "27f02f032d04a0068cd5ac9cd973ad2e4b88c44f");
    var data = {data: req.body.data};

    client.post(data, function(error, data, oauthResponse){
      // add conditional logic based on OAuth's response
      console.log(oauthResponse.statusCode)

      if(error !== null) {
        console.log("Error : ",error);
        res.status(403).json({
          success: false,
          message: 'Snowshoe not found. Unauthorized'
        });
      }
      else if(oauthResponse.statusCode == 200) {
        console.log("Data retrieved : ", data);
        //res.end();
        res.json({
          success: true,
          message: "Success!! Snowshoe Found.",
          serial: data.stamp.serial
        });
      }

    });

  });






module.exports = router;
