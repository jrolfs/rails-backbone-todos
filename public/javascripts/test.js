var serviceURL = "http://jrbackbone.heroku.com/todos";
//var serviceURL = 'http://localhost:3000/todos';

var Todo = Backbone.Model.extend({
	url: serviceURL
});

var TodoStore = Backbone.Collection.extend({
  model: Todo,
  url: serviceURL
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

var todo = new Todo({
	content: "A test todo from Backbone"
})

todo.save();

todo.save({content:"update"})