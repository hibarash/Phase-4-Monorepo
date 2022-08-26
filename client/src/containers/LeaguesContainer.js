// import League from './components/Leagues';
import { useEffect, useState } from "react";


function LeagueContainer(props) {

console.log("Props from Container", props)
useEffect(() => {
    fetch("http://http://localhost:3001/league")
    .then((res) => res.json())
    .then((fetchedData) => {
    // console.log("leagues:", fetchedData);
    setLeagueData(fetchedData);
    })
}, []);

function deleteLeague(id) {
    console.log(id);
    setLeagueData((previousLeague) => {
    const filteredLeagueById = previousLeague.filter(
        (league) => league.id !== id
    );
    return filteredLeagueById 
    })
    // function deleteClick(){
    //     fetch(`http://http://localhost:3001/league/$(eachLeague.id}`,)
    // }
}

return(<>



</>)
}


export default LeagueContainer;