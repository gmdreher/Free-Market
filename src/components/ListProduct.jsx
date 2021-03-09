import React, { useEffect } from 'react';
import Product from './Product.jsx';
import './ListProduct.css';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../container/Container.jsx';
import axios from 'axios';

export default function ListProduct() {

    const dispatch = useDispatch();
    const listProductByName = useSelector((state) => state.product.listProductByName);
    const listProduct = useSelector((state) => state.product.listProduct);

    console.log("me trae esto", listProductByName);

    useEffect((query) => {

        return axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
            .then(products => {
                dispatch({ type: 'LIST_PRODUCT', payload: products.data.results });
                console.log("INFOOO", products);
            })

            .catch(err => console.log(err))

    }, [dispatch])


    return (
        <Container>
            <div className="listProdu">
                {
                    listProduct && listProduct.map(function (prop) {
                        return <Product product={prop} />
                    })
                }
            </div>
        </Container>
    )
}
