import { useState } from 'react'


function NewUser (props){
    //console.log("test to see if it works")
    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userLocation, setUserLocation] = useState("")
    

    const confirmSubmit = "New Account Created!"

    
    function functionToAddNewUser(newUser) {

        fetch("/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newUser),
    });
    }

        
    return(
        <form onSubmit={ (synthEvent) =>{
            synthEvent.preventDefault()
        
        let newUser={
            name: userName,
            password: userPassword,
            phone: userPhone,
            email: userEmail,
            location: userLocation,
        }
        
        
        functionToAddNewUser(newUser)

        // alert (confirmSubmit)
    }}>
            
            
                <h4> New User </h4>
                <input type="text" placeholder='your name' value={userName} onChange={(synthEvent)=>{setUserName(synthEvent.target.value)}}/>
                <input type="text" placeholder='password' value={userPassword} onChange={(synthEvent)=>setUserPassword(synthEvent.target.value)}/>
                <input type="text" placeholder='phone' value={userPhone} onChange={(synthEvent)=>setUserPhone(synthEvent.target.value)}/>
                <input type="text" placeholder='email' value={userEmail} onChange={(synthEvent)=>setUserEmail(synthEvent.target.value)}/>
                <input type="text" placeholder='location' value={userLocation} onChange={(synthEvent)=>setUserLocation(synthEvent.target.value)}/>

                <button type="submit"> Add User </button>
                
            </form>

    )
        }
    export default NewUser