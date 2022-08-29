class SessionController < ApplicationController

    def login
        user = User.find_by!(name:params[:username]) ## ! is used to check to see if there is an exception? without the ! it doesnt responds w a no value/nil so ! returns the exception which is RecordNotFound
        

        # if user && user.authenticate
        if user&.authenticate(params[:password])  
            ### user&. means --> if user && user.authenticate
            render json: user, status: :ok 
        else 
            render json: {error: "Invalid Password or Username"}, status: :unprocessable_entity
        end 
    end 
end

end
