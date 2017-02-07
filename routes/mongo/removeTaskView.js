var express = require('express');
var router = express.Router();
var p = require('./model/schemas/Task');
var Task = p.model;

router.post('/:id/remove', function(req, res) {	
  Task.findById(req.params.id, function(err, doc) {
    doc.remove(function(){  
      req.flash('mensaje', 'Tarea eliminada'); 
      req.flash('clase', 'success');  	
      res.redirect('/mongoList');  	
    });
  });
});

module.exports = router;