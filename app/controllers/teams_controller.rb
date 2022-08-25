class TeamsController < ApplicationController
    def index
        render json: Team.all
    end
    
    def show
        teams = Team.find_by(id: params[:id])

        if teams
            render json: teams
        else
            render json: {"error": "Team Not Found", status: :not_found}
        end
    end

    def create
        new_team = Team.new(create_team_params)
        
        if new_team.save
            render json: new_team
        else
            render json: { "errors": new_team.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    def create_team_params
        params.require(:team).permit(
            :name,
            :league_id
        )
    end
end
