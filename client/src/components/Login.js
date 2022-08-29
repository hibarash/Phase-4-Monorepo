import React, {useState} from 'react'
import { useHistory } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState([])
    let history = useHistory();

    function onSubmit(e){
        e.preventDefault()
        const user = {
            email,
            password
        }
    
        fetch(`/login`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if(json.errors) setErrors(json.errors)
        })
    }


        //     res.json()
        //     .then(user=>{
        //     setUser(user)
        //     setIsAuthenticated(true)
        //     })
            
        // } else {
        //     res.json()
        //     .then(json => setErrors(json.error))
        // }
        // })
    
    return (

        <> 
        <form onSubmit={onSubmit}>
        <label>
          Username
   
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
         Password
    
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
       
        <input type="submit" value="Login!" />
      </form>
      {errors?errors.map(e => <div>{e}</div>):null}
        </>
    
        
    )
}

export default Login;
