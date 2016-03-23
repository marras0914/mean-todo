'use strict';

var Todo = require('./models/todo');

var todos = [
    'feed the dog',
    'got to back',
    'water the shrubs'
];

todos.forEach(function(todo, index){
    Todo.find({'name': todo}, function(err, todos){
        if (!err && !todos.length){
            Todo.create({completed: false, name: todo});
        }
    });
});