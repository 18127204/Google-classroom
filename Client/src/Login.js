import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
const Login = () => {
    
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const navigate =  useNavigate();
    useEffect(() => {
        if (localStorage.getItem('user-info')){
            navigate.push("/add")
        }
    }, [])

    const login = async () => {
       console.warn(usernameReg,passwordReg)
       let item = { usernameReg, passwordReg};
       let result = await fetch("http://localhost:3000/login", {
           method: 'POST',
           headers: {
               "Content-Type": "application/json", 
               "Accept": "application/json"
           },
           body: JSON.stringify(item)
       })
       result = await result.json()
       localStorage.setItem("user-info",JSON.stringify(result));
       navigate.push('/add')
        
    }
    return (
        <div>
            Login<br /><br />
            <div>
                Username<br />
                <input type="text"  
                       onChange={(e)=> {setUsernameReg(e.target.value)}}/>
            </div>

            <div style={{ marginTop: 10 }}>
                Password<br />
                <input type="password" onChange={(e)=> {setPasswordReg(e.target.value)}}/>
            </div><br />
            <button onClick={login} className="btnlogin">Login</button>
        </div>
      );
    
}

export default Login;