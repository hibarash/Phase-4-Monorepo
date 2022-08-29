class SessionsController < ApplicationController

        skip_before_action :authorized_user, only: [:login]

    def login

    user = User.find_by!(email:params[:email]) ## ! is used to check to see if there is an exception? without the ! it doesnt responds w a no value/nil so ! returns the exception which is RecordNotFound
        

    if user&.authenticate(params[:password])  
        session[:current_user] = user.id
        render json: user, status: :ok 
    else 
        render json: {error: "Invalid Password or Username"}, status: :unprocessable_entity
    end 
end 
end