import React, { useState } from 'react';
import './Cart.css';
import ErrorMsg from './ErrorMsg';
import img from '../images/img1.png';

export default function LineItem() {
    const [qty, setQty] = useState(1)
    const [err, setErr] = useState(null)
    const [linePrice, setLinePrice] = useState(0)

    
    function increase() {
        if(qty < 10){
        setQty(qty + 1)
        } else {
        setErr("Maximum quantity is 10")
        }
    };

    function decrease() {
        if(qty >1){
            setQty(qty - 1)
            } else {
            setErr("Minimum quantity is 1")
            }
    };

    return (
        <>
        {err && <ErrorMsg err={err} setErr={setErr}/>}
        <div className='line-item'>
            <img className='line-img' src={img}/>
            
            <p>G&B ORGANIC DARK 70%</p>
            <div>
                <p className='set-qty' onClick={decrease}>-</p>
                <input type='number' disabled value={qty} onChange={(e)=>{setQty(e.target.value)} }/>
                <p className='set-qty' onClick={increase}>+</p>
            </div>
            

            <h2>£{(linePrice * qty).toFixed(2)}</h2>

            <h2>X</h2>
        </div>
        </>
    )
}
