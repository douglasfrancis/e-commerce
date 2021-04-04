import React, { useState } from 'react';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.jpg';
import './ProductPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function ProductPage() {

    const [mainImg, setMainImg] = useState(img1);
    const [added, setAdded] = useState(false);
    const [qty, setQty] = useState(1);

    const product = {
        name: 'G&B ORGANIC DARK 70% 90G BAR',
        price: 2.00,
        qty: qty
    }
    return (
        <div id='product-page'>
            <div id='thumb-images'>
                <img className='thumb-img' src={img1} onClick={()=> setMainImg(img1)}/>
                <img className='thumb-img' src={img2} onClick={()=> setMainImg(img2)}/>
                <img className='thumb-img' src={img3} onClick={()=> setMainImg(img3)}/>

            </div>
                
            <div id='main-container'>
                <img id='main-img'  src={mainImg} />
            </div>

            <div id='detail-container'>
                <div id='icons'>
                <Link to='/login'><FontAwesomeIcon icon={faSignOutAlt} /></Link>
                <Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} /></Link> 
                
                </div>


                <h2>{product.name}</h2>
                <h2>£{product.price.toFixed(2)}</h2>
                {added ? <h2>Added to Basket</h2> : <button onClick={()=>setAdded(true)} id='cart-btn' className='product-btn'>Add to Cart</button>}
                
                <Link to='/cart'><button id='basket-btn' className='product-btn'>View Basket</button></Link>

                <p id='description'>The dark one. The complex taste of simplicity. Just let a single square rest on your tongue and see how many flavours you can pick out. Do you get a rich nuttiness? Roasted coffee? Savoury notes? Bitter cherry? Sweet vanilla? Our original dark chocolate may look simple but it's anything but.</p>
            </div>
        </div>
    )
}
