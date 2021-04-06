import React, { useState } from 'react';
import './Auth.css';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import ErrorMsg from './ErrorMsg';


export default function Login() {
    
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [err, setErr] = useState(null);
    const [inlineErr, setInlineErr] = useState(null);


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

    function hasWhiteSpace(e) {
    setUserName(e.target.value);
    let username = e.target.value;
    var reWhiteSpace = new RegExp(/\s/);

    // Check for white space
    if (reWhiteSpace.test(username)) {
        setInlineErr('White Space')
    } else {
        setInlineErr(null)
    }

    
}
    return (
        <div className="auth-page">
            {redirect ? (<Redirect push to="/"/>) : null }
            {err && <ErrorMsg err={err} setErr={setErr} />}
            <form>
                <h2>Sign In</h2>
                <view>
                    
                    <input placeholder="Username or email address" className='auth-input' value={userName} onChange={(e)=> hasWhiteSpace(e)}/>
                    
                    {inlineErr && <p id='inline-err'>Username should not contain spaces</p> }
                </view>
                <view>
                    
                    <input type='password' placeholder='Password' className='auth-input' value={password} onChange={(e)=> setPassword(e.target.value)} />
                    
                </view>
                
                <input id='auth-check' type="checkbox" />
                <label htmlFor='auth-check'>Keep me signed in</label>

                <button onClick={loginUser} className='auth-btn'>Login</button>
                <br/><br/>
                <p className='auth-p'>I forgot my password</p>
                <p className='auth-p'>Resend verification email</p>

            </form>
        </div>
    )
}
