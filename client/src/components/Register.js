import React, { useState } from 'react';
import './Auth.css';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import ErrorMsg from './ErrorMsg';

export default function Register() {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const [err, setErr] = useState(null);

 

    async function registerUser(e){
        e.preventDefault();
        const payload = {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            password: password
        }

        await Axios.post('http://localhost:5000/register', payload).then((response)=>{
           
             setRedirect(true);
            
          }).catch((error) => {
            setErr(error.response.data.msg)
          });
    };

    return (
        <div className="auth-page">
            {redirect ? (<Redirect push to="/login"/>) : null }
            {err && <ErrorMsg err={err} setErr={setErr}/>}
            <form>
                <h2>Register</h2>
              
                    <input placeholder='First Name' className='auth-input' value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
                    <input placeholder='Last Name' className='auth-input' value={lastName} onChange={(e)=> setLastName(e.target.value)} />
                    <input type='email' placeholder='Email Address' className='auth-input' value={userName} onChange={(e)=> setUserName(e.target.value)} />
                    <input type='password' placeholder='Password' className='auth-input' value={password} onChange={(e)=> setPassword(e.target.value)} />

                <button onClick={registerUser} className='auth-btn'>Register</button>
                
            </form>
        </div>
    )
}
