function Volleyball(props) {

    console.log("Props please", props.teamProp.league.id)

    // if props.teamProp.league.id === 1

    return( 
        
        <div>
            <h1>{props.teamProp.name}</h1>   
              {/* Image here */}
        </div>

    
    )
}

export default Volleyball