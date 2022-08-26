
import VolleyballCard from "./VolleyballCard";
//import {Link} from "react-router-dom";


function Volleyball({teamsToMap}){
    
const leagueTeamsSplit = teamsToMap.filter(volleyball => volleyball.league.sport_name === 'Volleyball')
    return(<>

    {leagueTeamsSplit.map(
    (eachTeam)=>{
        return(<VolleyballCard
        key={eachTeam}
        teamProp={eachTeam}/>)
        }
        )}
        </>
        )
}



export default Volleyball;