var express = require('express');
var router = express.Router();
var p = require('./model/schemas/Task');
var Task = p.model;

router.get('/', function(req, res, next) {
  res.render('mongo/taskSaveView', { title: 'Creando tarea' });
});

router.post('/', function(req, res) {

  var task = new Task({ task : req.body.task });
  
  task.save(function(err) {
    if(!err) {
      req.flash('mensaje', 'Tarea añadida');
      req.flash('clase', 'success');
      res.redirect('/mongoList');
    } else {
      req.flash('mensaje', err);
      req.flash('clase', 'error');
      res.redirect('/mongoList');
    }
  });
});
module.exports = router;