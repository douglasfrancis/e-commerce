import React, { useContext, useState } from 'react';
import './Auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import ErrorMsg from './ErrorMsg';
import { Context } from '../Context';

export default function Login() {
    
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [err, setErr] = useState(null);


    async function loginUser(e){

        e.preventDefault();
        const payload = {
            userName: userName,
            password: password
        }
        

        await Axios.post('http://localhost:5000/login', payload).then((response) => {
          
            setRedirect(true);
          }, (error) => {
              console.log(error.response.data.msg)
            setErr(error.response.data.msg)
          });
    };
    return (
        <div className="auth-page">
            {redirect ? (<Redirect push to="/"/>) : null }
            {err && <ErrorMsg err={err} setErr={setErr} />}
            <form>
                <h2>Sign In</h2>
                <view>
                    <FontAwesomeIcon icon={faUser} />
                    <input placeholder="Username or email address" className='auth-input' value={userName} onChange={(e)=> setUserName(e.target.value)} />
                </view>
                <view>
                    <FontAwesomeIcon icon={faLock} />
                    <input placeholder='Password' className='auth-input' value={password} onChange={(e)=> setPassword(e.target.value)} />
                </view>
                
                <input id='auth-check' type="checkbox" />
                <label htmlFor='auth-check'>Keep me signed in</label>

                <button onClick={loginUser} className='auth-btn'>Login</button>
                <br/><br/>
                <p className='auth-p'>I forgot my password</p>
                <p className='auth-p'>Resend verification email</p>

                <p>Don't have an account? <Link to='/register'>Register</Link></p>
            </form>
        </div>
    )
}
