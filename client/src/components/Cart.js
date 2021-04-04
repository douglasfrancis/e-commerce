import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import LineItem from './LineItem';
import Visa from './Visa';
import mastercard from '../images/mastercard.png';

export default function Cart() {
    const[cardName, setCardName] = useState("");
    const[cardNumber, setCardNumber] = useState("");
    const[cardCVV, setCardCVV] = useState("");
    const[cardYear, setCardYear] = useState("yy");
    const[cardMonth, setCardMonth] = useState("mm");
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
                
                <div id='cards'>
                <Visa name={cardName} number={cardNumber} mm={cardMonth} yy={cardYear}/>
                <img id='mastercard' src={mastercard} />
                </div>
                

                <label className='card-label'>Name on Card</label>
                <input className='card-input' placeholder="Jane Smith" value={cardName} onChange={(e)=> setCardName(e.target.value)}/>

                <label  className='card-label'>Card Number</label>
                <input id='card-num' maxlength="16" className='card-input' placeholder="XXXX-XXXX-XXXX-XXXX" value={cardNumber} onChange={(e)=> setCardNumber(e.target.value)} />


                <label className='card-label'>CVV</label>
                <input className='card-input' maxlength="3" placeholder="XXX" value={cardCVV} onChange={(e)=> setCardCVV(e.target.value)}/>

                <label for='month' className='card-label'>Expiration date</label>
                <select id='month' value={cardMonth} onChange={(e)=> setCardMonth(e.target.value)}>
                    <option disabled>mm</option>
                    <option value='01'>01</option>
                    <option value='02'>02</option>
                    <option value='03'>03</option>
                    <option value='04'>04</option>
                    <option value='05'>05</option>
                    <option value='06'>06</option>
                    <option value='07'>07</option>
                    <option value='08'>08</option>
                    <option value='09'>09</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                </select>

                <select id='year' value={cardYear} onChange={(e)=> setCardYear(e.target.value)}>
                    <option disabled>yy</option>
                    <option value='21'>21</option>
                    <option value='22'>22</option>
                    <option value='23'>23</option>
                    <option value='24'>24</option>
                    <option value='25'>25</option>
                    <option value='26'>26</option>
                </select>

                <button onClick={Processing} id='card-btn'>Check Out</button>
            </form>
        </div>
    )
}
