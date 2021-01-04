import React from 'react';
import Cards from '../components/Cards.jsx';

export default function HomeScreen() {


    return (
        <div className="row center">
            {products.map((product) => (
                <Cards key={product._id} product={product}></Cards>
            ))}
        </div>
    )
}