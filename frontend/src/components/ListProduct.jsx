import React, { useEffect } from 'react';
import Product from './Product.jsx';
import './ListProduct.css';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../container/Container.jsx';

export default function ListProduct() {

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
                console.log(list.results.length);
                console.log("DATOS DE LISTPRODUCT:", list.results);

            })
            .catch(() => {
                console.log('error');
            })
    }, [dispatch])

    return (
        <Container>
            <div className="listProdu">
                {
                    listProduct.map(function (prop) {
                        return <Product product={prop} />
                    })
                }
            </div>
        </Container>
    )
}
