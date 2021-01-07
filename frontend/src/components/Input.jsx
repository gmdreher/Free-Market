import React from 'react';
import './Input.css';

export default function Input({ ...props }) {

    return (
        <div className="search" >
            <i class="fas fa-search"></i>
            <input type="text" {...props} />
        </div>
    );
};

