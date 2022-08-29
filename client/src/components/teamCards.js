


function teamCard({teamProp}) {

    


    return( 
        
        <div>
            <h1>{teamProp.name}</h1>  
            <img src={teamProp.image_url}/>  
            <button>Select League!</button>
        </div>


    )
}

export default teamCard