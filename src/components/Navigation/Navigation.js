import React from 'react';
import './Navigation.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <header className='Navigation'>
            <h1>Quotes Central</h1>
            <ul>
                <li><NavLink className='Link' to='/' exact>Quotes</NavLink></li>
                <li><NavLink className='Link' to='/add-quote'>Submit new quote</NavLink></li>
            </ul>
        </header>
    );
};

export default Navigation;