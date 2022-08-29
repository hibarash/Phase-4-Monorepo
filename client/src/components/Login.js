import React, {useState} from 'react'
import { useHistory } from "react-router-dom";


function Login(updateUser) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
const [formData, setFormData] =useState({
    email:'',
    password:''
})
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
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    updateUser(user)
                    history.push(`/users`)
                })
            }
                       
        else {res.json().then(json => setErrors(json.errors))
        
    }
    })}
    
    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setFormData({ ...formData, [name]: value })
    //   }

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
        
        <form className='form' onSubmit={onSubmit}>
        <h1> Login below!</h1>
        <label className='label'>Email Address</label>
        <input className='text-input' placeholder='Email Address' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        
        <label className='label'>Password</label>    
        <input className='text-input' placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        
       
        <button className='button' type="submit">Log In </button>
      </form>
      {errors?errors.map(e => <div>{e}</div>):null}
        </>
    
        
    )
}

export default Login;
