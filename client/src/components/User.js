import React, {useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'


function User(userAccount){


    const params = useParams()
    const history = useHistory()
    const [userUpdate, setUserUpdate] = useState("")
    const [userToDestroy, setUserToDestroy] = useState({})
    const [errors, setErrors] = useState(false)
    const [nameUpdate, setNameUpdate] = useState("")
    const [emailUpdate, setEmailUpdate] = useState("")
    const [phoneUpdate, setPhoneUpdate] = useState("")
    const [ locationUpdate, setLocationUpdate] = useState("")

    //const confirmSubmit = "Account updated"

    function updateUser(updatedInfo){

        fetch(`/users${userUpdate}`, {
            method:'PATCH',
            headers:{'Content-Type': "application/json"},
            body:JSON.stringify(updatedInfo)
        })
        .then(resp => {
            if (resp.ok){
                resp.json()
                .then(setUserUpdate())
            }
        })
    }
    // function deleteUser(id){
        
    //         console.log(id);
    //         setUserData((previousUser) =>  {
    //             const filteredUserById = previousUser.filter(
    //             (user) => user.id !== id
    //             );
    //       
    
    // return filteredUserById
    //         })
    //         }
    // }


    function handleDelete(){

        

        fetch(`/users${params.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
            
        })
        .then(res => {
            if(res.ok){
                userAccount(params.id)
                history.push('/')
            } else
            res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))

        })
    }

    return(
    <form onSubmit={(synthEvent) => {
        synthEvent.preventDefault() 

        let updatedInfo={
            name: nameUpdate,
            email: emailUpdate,
            phone: phoneUpdate,
            location: locationUpdate
        }
        updateUser(updatedInfo)
    }}>


    <h1> Your Account Deatils</h1>
    
    <p>
        <label>Name</label>
        <input type="text" placeholder="name" value={nameUpdate} onChange={(synthEvent)=>{setNameUpdate(synthEvent.target.value)}} />
    </p>
    
    <p>
        <label>Email</label>
        <input type="text" placeholder="email" value={emailUpdate} onChange={(synthEvent)=>{setEmailUpdate(synthEvent.target.value)}} />
    </p>

    <p>
        <label>Phone</label>
        <input type="text" placeholder="phone" value={phoneUpdate} onChange={(synthEvent)=>{setPhoneUpdate(synthEvent.target.value)}} />
    </p>

    <p>
        <label>Location</label>  
        <input type="text" placeholder="location" value={locationUpdate} onChange={(synthEvent)=>{setLocationUpdate(synthEvent.target.value)}} />
    </p>    

        <button type='submit'> Edit Account </button>

        <button type='button'> Delete Account </button>

</form>
    )    
}

export default User;