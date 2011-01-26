class Todo < ActiveRecord::Base
	validates :content, :presence => true
end
