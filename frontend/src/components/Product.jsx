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
        //     <div key={product._id} className="card">
        //         <Link to={`/product/${product._id}`}>
        //             <img
        //                 className="medium"
        //                 src={product.image}
        //                 alt={product.name} />
        //         </Link>
        //         <div className="card-body">
        //             <Link to={`/product/${product._id}`}>
        //                 <h2>{product.name}</h2>
        //             </Link>
        //             <div className="price">${product.price}</div>
        //         </div>
        //     </div>
    )
};

