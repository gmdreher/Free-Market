import React from 'react';
import './Product.css';
import { useHistory, useLocation } from 'react-router-dom';

export default function Product({ product }) {
    const history = useHistory();
    function handleClick() {
        history.push(`/products/${product.title.toLowerCase()}`)
    }

    return (
        <div className="product" onClick={handleClick}>
            <h2>{product.title}</h2>
            <img loading="lazy" src={product.thumbnail} alt="" />
            <p><strong>Precio: $</strong>{product.price}</p>
            <button >Ver detalles</button>
        </div>
    )
};

