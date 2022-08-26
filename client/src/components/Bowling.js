import BowlingCard from "./BowlingCard";


function Bowling({teamsToMap}){
    
const leagueTeamsSplit = teamsToMap.filter(Bowling => Bowling.league.sport_name === 'Bowling')
    return(<>

    {leagueTeamsSplit.map(
    (eachTeam)=>{
        return(<BowlingCard
        key={eachTeam}
        teamProp={eachTeam}/>)
        }
        )}
        </>
        )
}



export default Bowling;