// import React, {useState} from 'react'
// function User(){

//     const [nameUpdate, setNameUpdate] = useState("")
//     const [emailUpdate, setEmailUpdate] = useState("")
//     const [phoneUpdate, setPhoneUpdate] = useState("")
//     const [ locationUpdate, setLocationUpdate] = useState("")

//     //const confirmSubmit = "Account updated"

//      function updateUser(updatedInfo){
//         fetch(`users/`, {
//             method:'PATCH',
//             headers:{'Content-Type': "application/json"},
//             body:JSON.stringify(updatedInfo)
//         })
//         .then(resp => {
//             if (resp.ok){
//                 resp.json()
//                 .then(updatedInfo)
//             }
//         })
//     }

//     return(<>   
//     <form onSubmit={((synthEvent) => {
//         synthEvent.preventDefault() 

//         let updatedInfo={
//             name: nameUpdate,
//             email: emailUpdate,
//             phone: phoneUpdate,
//             location: locationUpdate
//         }
//         updateUser(updatedInfo)
//     })

//      }/>
//     // <h1> Your Account!</h1>
//     // <table className="table">
//     // <h2>Name</h2><input
//         type=""
//         placeholder="name"
//         name={updatedInfo.name}
//         value={updatedInfo.name}
//         //onChange={handleChange}
//         />
//     // <h2>Email</h2>
//     // <h2>Phone</h2>
//     // <h2>Location</h2>
//     // </table>
//     </>
//     )



    
// }

// export default User;