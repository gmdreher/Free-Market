import React from 'react';
import Container from '../container/Container.jsx';
import Search from './Search.jsx';
import styled from 'styled-components';

const FilterStyled = styled.div`
    .grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 20px;
}

@media screen and (min-width: 768px){
    .grid {
        grid-template-columns: 480px 1fr 200px;
    }
}
`

export default function Filter() {

    return (
        <FilterStyled>
            <Container>
                <div className="grid">
                    <Search />
                    <span></span>
                </div>
            </Container>
        </FilterStyled>
    );
};
