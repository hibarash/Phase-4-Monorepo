class LeaguesController < ApplicationController
    def index
        render json: League.all
    end

    def show
        league = League.find_by(id: params[:id])

        if league
            render json: league #serializer?
        else
            render json: {"error": "League not found"}, status: :not_found
        end
    end


    # def create
    #     new_league = League.new(league_create_params
    #         sport_name:            
    #     )

    def destroy
        league_to_delete = User.find_by(id: params[:id])
        
        if league_to_delete
            league_to_delete.signup.destroy_all
            league_to_delete.destroy

            head :no_content

        else    
            render json: {"error": "League does not exist"}, status: :not_found

        end
    end

    # private
    # def league_create_params
    #     params.require(:user).permit(
    #         :sport_name
    #         ## may have to add more
    #     )

end
