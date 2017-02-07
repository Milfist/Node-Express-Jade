var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  task: String
});

module.exports = {
    model: mongoose.model('Task', taskSchema),
    schema: taskSchema
};