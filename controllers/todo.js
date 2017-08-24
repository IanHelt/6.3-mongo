var Todo = require('../models/todo');


var TodoController = {
  list: function(req, res){
    Todo.find().then(function(todos){
        res.render('todo/list', {todos: todos});
    });


  },
  add: function(req, res) {

      var title = req.body.title;


    var newTodo = new Todo({title: title});
    newTodo.save(function() {

      res.redirect('/todo');
    });
  },
  delete: function(req, res) {
    var todoId = req.params.id;
    todo.deleteOne({"_id": todoID}).then(function() {
      res.redirect('/todo');
    })
  }
};

module.exports = TodoController;
