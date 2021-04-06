import React, { useContext, useState } from 'react';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.jpg';
import white1 from '../images/white1.png';
import white2 from '../images/white2.png';
import white3 from '../images/white3.jpg';
import './ProductPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSignOutAlt, faShareAlt} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import { Context } from '../Context';



const database = [
    {
        id: 1,
        name: 'G&B ORGANIC WHITE 90G BAR',
        price: 2.00,
        images: {
            img1: white1,
            img2: white2,
            img3: white3,
            },
        description: 'White: The black sheep of the group. The Vanilla one. Cocoa butter, pressed from crushed cocoa beans, and organic whole milk give our white chocolate its wonderfully smooth texture. Then, we blend in Madagascan vanilla, which adds a deeper flavour, which, we think, white chocolate rarely achieves.'
    },
    {
        id: 2,
        name: 'G&B ORGANIC DARK 70% 90G BAR',
        price: 2.00,
        images: {
            img1: img1,
            img2: img2,
            img3: img3,
            },
        description: 'The dark one. The complex taste of simplicity. Just let a single square rest on your tongue and see how many flavours you can pick out. Do you get a rich nuttiness? Roasted coffee? Savoury notes? Bitter cherry? Sweet vanilla? Our original dark chocolate may look simple but it\'s anything but.'
    }
]
export default function ProductPage() {
    const [choice, setChoice] = useState(database[0]);
    const [cart, setCart] = useContext(Context)
    const [added, setAdded] = useState(false);
    const [qty, setQty] = useState(1);
    const [err, setErr] = useState(null);
    const [showSocials, setShowSocials] = useState(false);
    const [mainImg, setMainImg] = useState(choice.images.img1);
    const basketItem= {};
    const basketArr = []
   

   

    function changeDark() {
        setChoice(database[1]);
        setMainImg(database[1].images.img1)
    };

    function changeLight() {
        setChoice(database[0]);
        setMainImg(database[0].images.img1)
    };

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

    function addToBasket () {
        setAdded(true);
        basketItem.id = choice.id;
        basketItem.name = choice.name;
        basketItem.price = choice.price;
        basketItem.qty = qty;
        basketItem.total = (qty)*(choice.price);
        basketArr.push(basketItem);
        setCart(basketArr);
    }

    return (
         <div id='product-page'>

            
            <div id='thumb-images'>
                <img className='thumb-img' src={choice.images.img1} onClick={()=> setMainImg(choice.images.img1)}/>
                <img className='thumb-img' src={choice.images.img2} onClick={()=> setMainImg(choice.images.img2)}/>
                <img className='thumb-img' src={choice.images.img3} onClick={()=> setMainImg(choice.images.img3)}/>
            </div>
                
            <div id='main-container'>
                <img id='main-img'  src={mainImg} />
            </div>

                

            <div id='detail-container'>
                <div id='icons'>
                     <Link  to='/login'><FontAwesomeIcon icon={faSignOutAlt} /></Link>
                     <Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} /></Link> 
                 </div>
                
                <h2>{choice.name}</h2>
                <h2>£{choice.price.toFixed(2)}</h2>
                <div id='choices'>
                         <div className='choices' id='dark-choice' onClick={changeDark}>
                         </div>
                         <div className='choices' id='white-choice' onClick={changeLight}>
                         </div>
                </div>

                <div className='qty-container'>
                    <p className='set-qty' onClick={decrease}>-</p>
                    <input type='number' disabled value={qty} onChange={(e)=>{setQty(e.target.value)} }/>
                    <p className='set-qty' onClick={increase}>+</p>
                </div>

                {added ? <h2>Added to Basket</h2> : <button onClick={addToBasket} id='cart-btn' className='product-btn'>Add to Cart</button>}

                <Link to='/cart'><button id='basket-btn' className='product-btn'>View Basket</button></Link>
                <FontAwesomeIcon size='lg' onClick={()=>setShowSocials(true)} icon={faShareAlt} />
                {showSocials && (<div id='social-container'>
                <a target="_blank" href='https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/'><FontAwesomeIcon size='2x' icon={faFacebook} /></a>
                <a target="_blank" href='https://twitter.com/intent/tweet?url=http://localhost:3000/'><FontAwesomeIcon size='2x' icon={faTwitter} /></a>
                <a target="_blank" href='https://web.whatsapp.com/send?text=http://localhost:3000/'><FontAwesomeIcon size='2x' icon={faWhatsapp} /></a>

                    <p id='close-social' onClick={()=>setShowSocials(false)}>x</p>
                </div>)}
                <p id='description'>{choice.description}</p>
            </div>
     
                 
           
        </div>
        

    )
}
