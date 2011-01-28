var serviceURL = '/todos';

var Todo = Backbone.Model.extend({
	url: serviceURL
});

var TodoStore = Backbone.Collection.extend({
	model: Todo,
	url: serviceURL
});

var todos = new TodoStore;

/*
todos.fetch({
	success: function(model, response){
		alert("success");
	}, 
	error: function(model, response){
		alert("error");
	}	
});
*/

var todo = new Todo({
	content: "A test todo from Backbone";
})

todo.save({}, {
	success: function(model, response){
		alert(todo.get("url"));
		todo.save({done:true});
	}, 
	error: function(model, response){
		alert("error");
	}	
});