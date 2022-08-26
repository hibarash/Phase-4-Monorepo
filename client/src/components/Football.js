import FootballCard from "./FootballCard";


function Football({teamsToMap}){
    
const leagueTeamsSplit = teamsToMap.filter(football => football.league.sport_name === 'Football')
    return(<>

    {leagueTeamsSplit.map(
    (eachTeam)=>{
        return(<FootballCard
        key={eachTeam}
        teamProp={eachTeam}/>)
        }
        )}
        </>
        )
}



export default Football;