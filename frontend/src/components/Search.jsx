import React, { useState } from 'react';
import Input from './Input.jsx';
import { useDispatch } from 'react-redux';
import './Search.css';

export default function Search() {

    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch();


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
        <div className="container" >
            {
                inputValue &&
                <i class="fas fa-times close" onClick={clearInput}></i>
            }
            <Input placeholder="Buscar..." value={inputValue} onChange={filterByName} />
        </div>
    );
};