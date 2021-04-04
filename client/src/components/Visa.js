import React from 'react';
import visa from '../images/visa.png';
import './Visa.css';

export default function Visa( {name, number, mm, yy}) {
    return (
        <div id='visa-container'>
            <img src={visa}/>
            <p id='visa-name'>{name}</p>
            <p id='visa-number'>{number}</p>
            
            <p id='visa-date'>{mm}/{yy}</p>
        </div>
    )
}
