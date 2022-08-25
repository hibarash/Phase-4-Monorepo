class SignupsController < ApplicationController
    def show
        signup = Signup.find_by( id: params[:id])
        if signup
            render json: signup, serializer: SignupShowSerializer
        else
            render json: {"errors": "Signup not found"}, status: :not_found
        end
    end

    def destroy
        signup_to_destroy = Signup.find_by(id: params[:id])

        if signup_to_destroy
            signup_to_destroy.destroy
            head :no_content
        else
            render json: {"error": "Signup not found"}, status: :not_found
        end
    end

    def create 
        new_signup = Signup.new(signup_create_params)

        if new_signup.save
            render json: new_signup
        else
            render json: {"errors": new_signup.errors.full_messages}, status: unprocessable_entity
        end
    end

    private
    def signup_create_params
        params.require(:signup).permit(
            :user_id,
            :league_id
        )
    end

end
