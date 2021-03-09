import React from 'react';
import { useSelector } from 'react-redux';
import Detalle from '../components/Detalle.jsx';
import Container from './Container.jsx';
import './ProductDetails.css';


export default function ProductDetails({ match, history }) {
    const listProduct = useSelector((state) => state.product.listProduct.find(a => a.title.toLowerCase() === match.params.id));
    console.log("detlle", listProduct);
    console.log(match.params.id)

    function handleClick() {
        history.goBack()
    }

    return (
        <Container>
            <button className="flecha" onClick={handleClick}><i class="fas fa-long-arrow-alt-left"></i> Volver</button>
            <Detalle {...listProduct} />
        </Container>
    );
};

