import React from 'react';
import './Detalle.css';


export default function Detalle({ title, price, thumbnail, condition, attributes, sold_quantity }) {

    return (
        <div className="detalle" >
            <img src={thumbnail} alt="" />
            <div className="datos">
                <h2>{title}</h2>
                <p><strong>Condición: </strong>{condition}</p>
                <p><strong>Stock: </strong>{sold_quantity}</p>
                <p><strong>Precio: </strong> ${price}</p>
                <p><strong>Modelo: </strong> {attributes[2].value_name}</p>
            </div>
        </div>
    );
};

