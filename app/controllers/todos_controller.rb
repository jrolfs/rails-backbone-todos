class TodosController < ApplicationController
	# GET /todos
	def index
		@todos = Todo.all

		render :json => @todos
	end

	# GET /todos/1
	def show
		@todo = Todo.find(params[:id])

		render :json => @todo
	end

	# GET /todos/new
	def new
		@todo = Todo.new

		render :json => @todo
	end

	# GET /todos/1/edit
	def edit
		@todo = Todo.find(params[:id])
	end

	# POST /todos
	def create
		
		@todo = Todo.new do |param|
			param.content = params[:content]
			param.order = params[:order]
			param.done = params[:done]
		end

		if @todo.save
			render :json => @todo, :status => :created, :location => @todo
		else
			render :json => @todo.errors, :status => :unprocessable_entity
		end
	end

	# PUT /todos/1
	def update
		@todo = Todo.find(params[:id])

		if @todo.update_attributes(:content => params[:content], :order => params[:order], :done => params[:done])
			head :ok
		else
			render :json => @todo.errors, :status => :unprocessable_entity
		end
	end

	# DELETE /todos/1
	# DELETE /todos/1.xml
	def destroy
		@todo = Todo.find(params[:id])
		
		if @todo.destroy
			head :ok
		end
	end
end