import BaseballCard from "./BaseballCard";


function Baseball({teamsToMap}){
    
const leagueTeamsSplit = teamsToMap.filter(Baseball => Baseball.league.sport_name === 'Baseball')
    return(<>

    {leagueTeamsSplit.map(
    (eachTeam)=>{
        return(<BaseballCard
        key={eachTeam}
        teamProp={eachTeam}/>)
        }
        )}
        </>
        )
}



export default Baseball;