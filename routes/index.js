var express = require('express');
var router = express.Router();

var response = {
    "data": {
      "data": [
        {
          "bytes_received_percentage": 90.54137343613905,
          "bytes_received_sum": 345175323360.0,
          "bytes_sent_percentage": 96.00773965862061,
          "bytes_sent_sum": 743996857710.0,
          "count": 52838896,
          "count_percentage": 97.64272707346973,
          "name": "unknown"
        },
        {
          "bytes_received_percentage": 8.015474210436132,
          "bytes_received_sum": 30557785877.0,
          "bytes_sent_percentage": 0.6124306792691697,
          "bytes_sent_sum": 4745935094.0,
          "count": 796348,
          "count_percentage": 1.4715975598639206,
          "name": "NIARA"
        },
        {
          "bytes_received_percentage": 1.4431523534248187,
          "bytes_received_sum": 5501800573.0,
          "bytes_sent_percentage": 3.379829662110223,
          "bytes_sent_sum": 26191457659.0,
          "count": 432449,
          "count_percentage": 0.7991366753801008,
          "name": "NIARA.COM"
        }
      ],
      "debug": {
        "data": {
          "user_domain": {
            "NIARA": {
              "bytes_received_sum": 30557785877.0,
              "bytes_sent_sum": 4745935094.0,
              "count": 796348
            },
            "NIARA.COM": {
              "bytes_received_sum": 5501800573.0,
              "bytes_sent_sum": 26191457659.0,
              "count": 432449
            },
            "unknown": {
              "bytes_received_sum": 345175323360.0,
              "bytes_sent_sum": 743996857710.0,
              "count": 52838896
            }
          }
        },
        "total_count": 54114523
      },
      "fields": {
        "bytes_received": "Bytes Received",
        "bytes_sent": "Bytes Sent"
      },
      "header": "Name",
      "title": "Domains"
    }};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', function(req, res, next) {
  return res.send({ data: 'Hello Ritesh!' });
});

router.post('/api/search/groupbySimple', function(req, res, next) {
  return res.send({ data: response.data });
});

module.exports = router;
