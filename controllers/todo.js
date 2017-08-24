var Todo = require('../models/todo');


var TodoController = {
  list: function(req, res){
    todo.find();
    res.render('todo/list', {});

  },
  add: function(req, res) {

      var title = req.body.title;


    var newTodo = new Todo({title: title});
    newTodo.save(function() {

      res.redirect('/todo');
    });
  }
};

module.exports = TodoController;
