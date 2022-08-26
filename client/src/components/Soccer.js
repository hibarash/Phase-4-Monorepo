import SoccerCard from "./SoccerCard";


function Soccer({teamsToMap}){
    
const leagueTeamsSplit = teamsToMap.filter(soccer => soccer.league.sport_name === 'Soccer')
    return(<>

    {leagueTeamsSplit.map(
    (eachTeam)=>{
        return(<SoccerCard
        key={eachTeam}
        teamProp={eachTeam}/>)
        }
        )}
        </>
        )
}



export default Soccer;