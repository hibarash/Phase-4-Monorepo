class UserTeamsController < ApplicationController
    def show
        user_team = UserTeam.find_by(id: params[:id])
        if user_team
            render json: user_team
        else
            render json: {"errors": "User_team not found"}, status: :not_found
        end
    
    end
end
