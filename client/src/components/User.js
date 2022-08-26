function User(){

    const [nameUpdate, setNameUpdate] = useState("")
    const [emailUpdate, setEmailUpdate] = useState("")
    const [phoneUpdate, setPhoneUpdate] = useState("")
    const [ locationUpdate, setLocationUpdate] = useState("")

    const confirmSubmit = "Account updated"

    // function updateUser(updatedInfo){
    //     fetch(`users/`, {
    //         method:'POST',
    //         headers:{'Content-Type': "application/json"},
    //         body:JSON.stringify(updatedInfo)
    //     })
    //     .then(resp => {
    //         if (resp.ok){
    //             resp.json()
    //             .then(updatedInfo)
    //         }
    //     })
    // }

    return(<>   
    <form onSubmit={((synthEvent) => {
        synthEvent.preventDefault() 

        let editAccount={
            name: nameUpdate,
            email: emailUpdate,
            phone: phoneUpdate,
            location: locationUpdate
        }
    })

     }
    // <h1> Your Account!</h1>
    // <table className="table">
    // <h2>Name</h2>
    // <h2>Email</h2>
    // <h2>Phone</h2>
    // <h2>Location</h2>
    // </table>
    )



    
}

export default User;