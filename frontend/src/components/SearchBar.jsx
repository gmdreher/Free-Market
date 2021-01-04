import React from 'react';
import './SearchBar.css';

export default function SearchBar(props) {

    return (
        <div className="search">
            <input type='text' className="searchTerm" placeholder="Buscar..." />
            <button type="submit" className="searchButton" onClick={() => props.onSearch("Buscando...")}>
            </button>
        </div>
    );
};

