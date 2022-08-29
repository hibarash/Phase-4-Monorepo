class ApplicationController < ActionController::API
    include ActionController::Cookies
before_action :authorized_user
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

def current_user
    User.find_by(id:session[:current_user])
end
def authorized_user
    return render json: {error: "Not Authorized"}, status: :unauthorized unless current_user
end
end