$(function(){

  // Todo Model
  // ----------

  // Our basic **Todo** model has `content`, `order`, and `done` attributes.
  window.Todo = Backbone.Model.extend({

	url: function() {
	      var base = 'todos';
	      if (this.isNew()) return base;
	      return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
	},

	// If you don't provide a todo, one will be provided for you.
	EMPTY: "empty todo...",

	// Ensure that each todo created has `content`.
	initialize: function() {
	  if (!this.get("content")) {
		this.set({"content": this.EMPTY});
	  }
	},

	// Toggle the `done` state of this todo item.
	toggle: function() {
	  this.save({done: !this.get("done")});
	},

	// Remove this Todo from *localStorage* and delete its view.
	clear: function() {
	  this.destroy();
	  this.view.remove();
	}

  });
});