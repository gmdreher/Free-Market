import React, { useEffect, useState } from 'react';
import Product from './Product.jsx';
import './ListProduct.css';
import { useSelector, useDispatch } from 'react-redux';

export default function ListProduct() {

    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch();
    const listProductByName = useSelector((state) => state.listProductByName);

    const listProduct = useSelector((state) => {
        if ('' !== state.filterByCategory) {
            return state.productFilterByCategory
        }
        if (listProductByName.length > 0) {
            return listProductByName
        }
        return state.listProduct;
    })
    // console.log("El estado de state es", listProduct);

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

    const filterByName = (e) => {
        setInputValue(e.target.value)
        dispatch({
            type: 'PRODUCT_BY_NAME',
            payload: e.target.value
        })
    }
    const clearInput = () => {
        dispatch({
            type: 'PRODUCT_BY_NAME',
            payload: ''
        })
        setInputValue('')
    }

    return (
        <div className="listProdu">
            <input type="text" value={inputValue} onChange={filterByName} />
            {
                inputValue &&
                <button onClick={clearInput}>X</button>
            }
            {
                listProductByName.length === 0 && inputValue &&
                <p><strong>{inputValue}</strong> No existe </p>
            }
            {
                listProduct.map(function (prop) {
                    return <Product product={prop} />
                })
            }
        </div>
    )
}
