var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var user = {
    fname: req.body.fname == null ? '' : req.body.fname,
    surname: req.body.surname == null ? '' : req.body.surname
  };

  res.render('getpost', { 
    title: 'Sobre get y post',
    user: user 
  });
});

router.post('/', function(req, res) {
  var user = {
    fname: req.body.fname,
    surname: req.body.surname
  };

  res.render('getpost', { 
    title: 'Sobre get y post de vuelta', 
    user: user 
  });
});

module.exports = router;