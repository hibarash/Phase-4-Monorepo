


function TeamCards(props) {

    console.log("Props please", props.leagueProp.id)


    return( 
        
        <div>
            <h1>{props.teamProp.name}</h1>    
            <button>Select League!</button>
        </div>


    )
}

export default TeamCards