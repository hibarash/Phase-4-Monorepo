function BaseballCard(props) {

    console.log("Props please", props.teamProp.league.id)

    // if props.teamProp.league.id === 1

    return( 
        
        <div>
            <h1>{props.teamProp.name}</h1>  
            <button>Select League!</button>
              {/* Image here */}
        </div>

    
    )
}

export default BaseballCard;