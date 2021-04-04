import React, { useState } from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    async function registerUser(e){

        e.preventDefault();
        const payload = {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            password: password
        }
        console.log(payload)

        await Axios.post('http://localhost:5000/register', payload).then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    };

    return (
        <div className="auth-page">
            <form>
                <h2>Register</h2>
              
                    <input placeholder='First Name' className='auth-input' value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
                    <input placeholder='Last Name' className='auth-input' value={lastName} onChange={(e)=> setLastName(e.target.value)} />
                    <input placeholder='Email Address' className='auth-input' value={userName} onChange={(e)=> setUserName(e.target.value)} />
                    <input placeholder='Password' className='auth-input' value={password} onChange={(e)=> setPassword(e.target.value)} />

                <button onClick={registerUser} className='auth-btn'>Register</button>
                <br/><br/>
                <p>Already have an account? <Link to='/login'>Log in</Link></p>
            </form>
        </div>
    )
}
