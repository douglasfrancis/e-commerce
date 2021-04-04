import React from 'react';
import './ErrorMsg.css';

export default function ErrorMsg( {err, setErr} ) {
    return (
        <div className='error-msg'>
            <p>{err}</p>
            <p id='err-close' onClick={()=> setErr(null)}>x</p>
        </div>
    )
}
