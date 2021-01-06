import React from 'react';
import './Product.css';


export default function Product({ product }) {

    return (
        <div className="product">
            <h2>{product.title}</h2>
            <img loading="lazy" src={product.thumbnail} alt="" />
            <p><strong>Precio: </strong>{product.price}</p>
            <button className="boton" >Ver detalles</button>
        </div>
    )
};

