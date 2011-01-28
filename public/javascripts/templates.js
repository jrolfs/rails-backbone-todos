<div class="todo <%= done ? 'done' : '' %>">
	<div class="display">
		<input class="check" type="checkbox" <%= done ? 'checked="checked"' : '' %> />
		<div class="todo-content"></div>
		<span class="todo-destroy"></span>
	</div>
	<div class="edit">
		<input class="todo-input" type="text" value="" />
	</div>
</div>

<% if (total) { %>
	<span class="todo-count">
		<span class="number"><%= remaining %></span>
		<span class="word"><%= remaining == 1 ? 'item' : 'items' %></span> left.
	</span>
<% } %>
<% if (done) { %>
	<span class="todo-clear">
		<a href="#">
			Clear <span class="number-done"><%= done %></span>
			completed <span class="word-done"><%= done == 1 ? 'item' : 'items' %></span>
		</a>
	</span>
<% } %>