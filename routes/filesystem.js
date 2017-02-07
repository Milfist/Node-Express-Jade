var express = require('express');
var router = express.Router();
var fs = require('fs');

/* Pruebas de filesystem. */
router.get('/', function(req, res, next) {
  res.render('filesystem', { 
    title: 'Persistiendo en un TXT', 
    fname: fs.readFileSync('file.txt')
  });
});

router.post('/', function(req, res) {
  fs.writeFile('file.txt', req.body.first_name, function(err){
    checkErr(err);
  });

  res.render('filesystem', { 
    title: 'Guardado', 
    fname: fs.readFileSync('file.txt')
  });

  function checkErr(err) {
    if(err) {
      throw err;
    }
  }
});

module.exports = router;
