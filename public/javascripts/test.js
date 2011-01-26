var Todo = Backbone.Model.extend({
	url: 'http://localhost:3000/todos'
});

var TodoStore = Backbone.Collection.extend({
  model: Todo,
    url: 'http://localhost:3000/todos'
});

var todos = new TodoStore;

todos.fetch({
	success: function(model, response){
		alert("success");
	}, 
	error: function(model,response){
		alert("error")
	}	
});

var todo = new Todo;

todo.save({content:"Test new Todo from Backbone"});