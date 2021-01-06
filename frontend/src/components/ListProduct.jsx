import React, { useEffect, useState } from 'react';
import Product from './Product.jsx';
import './ListProduct.css';
import { useSelector, useDispatch } from 'react-redux';

export default function ListProduct() {

    const dispatch = useDispatch();
    const listProduct = useSelector((state) => state.listProduct);
    console.log("El estado de state es", listProduct);

    useEffect(() => {

        fetch('https://api.mercadolibre.com/sites/MLA/search?q={query}')
            .then((response) => {
                return response.json()
            })
            .then((list) => {
                dispatch({
                    type: 'LIST_PRODUCT',
                    payload: list.results
                })
                // setListProduct(list.results);
                console.log(list.results.length);
            })
            .catch(() => {
                console.log('error');
            })
    }, [dispatch])

    return (
        <div className="listProdu">
            {
                listProduct.map(function (prop) {
                    return <Product product={prop} />
                })
            }
        </div>
    )
}
