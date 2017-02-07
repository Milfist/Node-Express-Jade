var express = require('express');
var router = express.Router();
var p = require('./model/schemas/Task');
var Task = p.model;

router.get('/', function(req, res) {	
  Task.find({}, function(err, docs) {
    res.render('mongo/taskListView', { 
      title: 'Mongo',
      docs: docs,

      mensaje: req.flash('mensaje'),
      clase: req.flash('clase')


    });
  });
});
module.exports = router;