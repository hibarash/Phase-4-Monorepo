function BasketballCard(props) {

    console.log("Props please", props.teamProp.league.id)

    // if props.teamProp.league.id === 1

    return( 
        
        <div>
            <h1>{props.teamProp.name} Basketball</h1>  
            <img src={props.teamProp.image_url}/>
            <button>Select League!</button>
        </div>

    
    )
}

export default BasketballCard;