import BasketballCard from "./BasketballCard";


function Basketball({teamsToMap}){
    
const leagueTeamsSplit = teamsToMap.filter(Basketball => Basketball.league.sport_name === 'Basketball')
    return(<>

    {leagueTeamsSplit.map(
    (eachTeam)=>{
        return(<BasketballCard
        key={eachTeam}
        teamProp={eachTeam}/>)
        }
        )}
        </>
        )
}



export default Basketball;