var express = require('express');
var router = express.Router();
var p = require('./model/schemas/Task');
var Task = p.model;

router.get('/:id/edit', function(req, res) {	
  Task.findById(req.params.id, function(err, doc) {
    res.render('mongo/updateTaskView', { 
      title: 'Mongo',
      task: doc,
      mensaje: 'Ahora puede modificar la tarea.',
      clase: 'info'
    });
  });
});

router.post('/:id', function(req, res) {	
  Task.findById(req.params.id, function(err, doc) {

    doc.task = req.body.task;
    doc.save(function(err){
    	if(!err){
          req.flash('mensaje', 'Tarea actualizada');
          req.flash('clase', 'success');
          res.redirect('/mongoList');
    	} else {
          req.flash('mensaje', err);
          req.flash('clase', 'error');
          res.redirect('/mongoList');
    	}	
    });
  });
});

module.exports = router;