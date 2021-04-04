import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import LineItem from './LineItem';

export default function Cart() {
    const[cardName, setCardName] = useState("");
    const[cardNumber, setCardNumber] = useState("");
    const[cardCVV, setCardCVV] = useState("");
    const [cartItems, setCartItems] = useState([]);
    const [processing, setProcessing] = useState(false);

    function Processing(e) {
        e.preventDefault();

        setProcessing(true);

        setTimeout(clearProcessing, 5000);
      }

    function clearProcessing() {
       
        setProcessing(false);
    };

    return (
        <div id='cart-page'>

{processing && <div id='processor'>
                    <div class="loader"></div>
                    <p>Processing, please wait</p>   
                </div>}

            <h2>Shopping Cart</h2>

            <div id='item-list'>
                <LineItem />
            </div>

            <div id='subtotal'>
                <div>
                <FontAwesomeIcon icon={faLongArrowAltLeft} />
                <Link to='/'><p>Continue shopping</p></Link>
                </div>
            <div>
                <p>subtotal</p><h2>£{cartItems.length < 1 ? <h2>-.--</h2> : <h2>Logic to Calculate</h2>}</h2>
            </div>
            </div>

            <form id='card-container'>
                <h2>Card Details</h2>
                

                <label className='card-label'>Name on Card</label>
                <input className='card-input' placeholder="Jane Smith" value={cardName} onChange={(e)=> setCardName(e.target.value)}/>

                <label  className='card-label'>Card Number</label>
                <input id='card-num' className='card-input' placeholder="XXXX-XXXX-XXXX-XXXX" value={cardNumber} onChange={(e)=> setCardNumber(e.target.value)} />


                <label className='card-label'>CVV</label>
                <input className='card-input' placeholder="XXX" value={cardCVV} onChange={(e)=> setCardCVV(e.target.value)}/>

                <button onClick={Processing} id='card-btn'>Check Out</button>
            </form>
        </div>
    )
}
