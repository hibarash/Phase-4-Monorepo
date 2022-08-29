class UsersController < ApplicationController

    skip_before_action :authorized_user, only: [:create, :destroy]

    def index
        render json: User.all

    end

    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: {"error": "User not found", status: :not_found}
        end
    end
    

    def create
        new_user = User.new(user_new_params)
        if new_user.save
            render json: new_user
        else  
            render json: {"errors": new_user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    

    def update
        userToUpdate = User.find_by(id:params[:id])

        if userToUpdate.update(user_update_params)
            render json: userToUpdate, status: :accepted

        else
            render json: {error: "user not found"}, status: :not_found
        end
    end
    

    def destroy
        user_to_delete = User.find_by(id:params[:id])
        
        if user_to_delete 
            user_to_delete.leagues.destroy_all
            user_to_delete.signups.destroy_all
            user_to_delete.teams.destroy_all
            user_to_delete.destroy

            head :no_content

        else    
            render json: {"error": "User does not exist"}, status: :not_found

        end
    end

    

    private
    def user_new_params
        params.require(:user).permit(:name, :password, :email, :phone, :location,:password)
    end

    def user_update_params
        params.require(:user).permit(:name, :email, :phone, :location)
    end

end

