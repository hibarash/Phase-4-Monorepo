class UsersController < ApplicationController
    def index
        render json: User.all

    end

    def show
        user =User.find_by(id: params[:id])

        if user
            render json: user
        else
            render json: {"error": "User not found", status: :not_found}
        end
    end

    def create
        new_user = User.new(new_user_params)
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

    def destroy
        user_to_delete = User.find_by(params[:id])
        
        if user_to_delete 
            user_to_delete.destroy

            head :no_content

        else    
            render json: {"error": "User does not exist"}, status: :not_found

        end
    end

    

    private
    def new_user_params
        params.require(:user).permit(
            :name,
            :password,
            :email,
            :phone,
            :location
        )
    end

    def user_update_params
        params.require(:user).permit(
            :name, 
            :email, 
            :phone,
            :location
        )
    end

end

end