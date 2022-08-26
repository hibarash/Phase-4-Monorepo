import { useState, useEffect } from "react";
import TeamCards from "./teamCards";
import Volleyball from "./Volleyball";



function Team(props){

    const [volleyballData, setVolleyballData]=useState([])

    const [teamData, setTeamData] =useState([])

    const [leagueData, setLeagueData] = useState("")
  
   
    // console.log(props.match.params.id)

    useEffect(() => {
        fetch("/teams")
        .then(res => res.json())
        // .then(data => console.log("data", data[1].id))
        .then(data => setTeamData(data))
        
      },[])
      
    
    useEffect(() => {
        fetch("/leagues")
        .then(res => res.json())
        // .then(data => console.log("data", data[1].id))
        .then(data => setLeagueData(data))
        
    },[])
    // `leagues/${id}`
    return(<>

    {teamData.map(
      (eachTeam)=>{
        // console.log(eachTeam)
        return(<TeamCards
          key={eachTeam}
          teamProp={eachTeam} leagueProp={eachTeam.league}/>)
           }
          )}
          </>
          )
}
      
      
  
  

export default Team;