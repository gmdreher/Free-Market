import React from 'react';
import styled from 'styled-components';

const OrderStyled = styled.select`
    padding: 1em; 
    border-radius: 5px;
    border: none;
    outline: 0;
    box-shadow: 0 2px 9px 0 rgba(0,0,0, .05);
`
export default function Order() {

    return (
        <div className="order" >
            <OrderStyled>
                <option value="">Ordenar por precio</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </OrderStyled>
        </div>
    );
};
