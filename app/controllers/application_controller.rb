class ApplicationController < ActionController::Base
  protect_from_forgery
	ActiveRecord::Base.include_root_in_json = false
end
