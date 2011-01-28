class HomeController < ApplicationController
  def index
		@todos = Todo.all
  end
end
