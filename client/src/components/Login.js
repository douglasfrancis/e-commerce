import React from 'react';
import './Auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="auth-page">
            <form>
                <h2>Sign In</h2>
                <view>
                    <FontAwesomeIcon icon={faUser} />
                    <input placeholder="Username or email address" className='auth-input' />
                </view>
                <view>
                    <FontAwesomeIcon icon={faLock} />
                    <input placeholder='Password' className='auth-input' />
                </view>
                
                <input id='auth-check' type="checkbox" />
                <label htmlFor='auth-check'>Keep me signed in</label>

                <Link to='/'><button className='auth-btn'>Login</button></Link>
                <br/><br/>
                <p className='auth-p'>I forgot my password</p>
                <p className='auth-p'>Resend verification email</p>

                <p>Don't have an account? <Link to='/register'>Register</Link></p>
            </form>
        </div>
    )
}
