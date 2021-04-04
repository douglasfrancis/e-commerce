import React from 'react';
import './Auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

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

                <button className='auth-btn'>Login</button>
                <br/><br/>
                <p className='auth-p'>I forgot my password</p>
                <p className='auth-p'>Resend verification email</p>
            </form>
        </div>
    )
}
