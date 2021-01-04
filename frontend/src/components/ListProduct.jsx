import React, { useEffect } from 'react';
import Product from './Product.jsx';
import './ListProduct.css';
import { useSelector, useDispatch } from 'react-redux';

export default function ListProduct() {

    const dispatch = useDispatch();
    const listProduct = useSelector((state) => state.listProduct);

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q={query}')
            .then((response) => {
                return response.json()
            })
            .then((list) => {
                dispatch({
                    type: 'LIST_PRODUCT',
                    payload: list
                })
                console.log(list.length);
            })
            .catch(() => {
                console.log('error');
            })
    }, [dispatch])

    return (
        <div className="listProdu">
            {
                listProduct.results.map(function (prop) {
                    return <Product product={prop} />
                })
            }
        </div>
    )
}
