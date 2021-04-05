import React, { useState, useContext, useEffect } from 'react';
import './Cart.css';
import ErrorMsg from './ErrorMsg';
import img1 from '../images/img1.png';
import white1 from '../images/white1.png';
import {Context} from '../Context';

export default function LineItem( {item, subtotal, setSubtotal}) {
    const [qty, setQty] = useState(item.qty)
    const [err, setErr] = useState(null)
    const [linePrice, setLinePrice] = useState(item.price)
    const [cart, setCart] = useContext(Context);
    
    
    function increase() {
        if(qty < 10){
        setQty(qty + 1)
        setSubtotal(subtotal + item.price)
        } else {
        setErr("Maximum quantity is 10")
        }
    };

    function decrease() {
        if(qty >1){
            setQty(qty - 1)
            setSubtotal(subtotal - item.price)
            } else {
            setErr("Minimum quantity is 1")
            }
    };

    function clearCart() {
        setCart([])
    }

    return (
        <>
        {err && <ErrorMsg err={err} setErr={setErr}/>}
        <div className='line-item'>
            <img className='line-img' src={item.id == 1 ? white1: img1 }/>
            
            <p>{item.name}</p>
            <div>
                <p className='set-qty' onClick={decrease}>-</p>
                <input type='number' disabled value={qty} onChange={(e)=>{setQty(e.target.value)} }/>
                <p className='set-qty' onClick={increase}>+</p>
            </div>
            

            <h2>£{(linePrice * qty).toFixed(2)}</h2>

            <h2 onClick={clearCart}>X</h2>
        </div>
        </>
    )
}
