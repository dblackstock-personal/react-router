import React from 'react'
import '../App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { tsPropertySignature } from '@babel/types';

const Nav = (props) => {
    return (
        <nav>
            <h2 className='title'>Black Friday</h2>
            <ul>
                <li>
                <Link to="/" href="/">Home</Link>
                </li>
                <li>
                <Link to="/about" href="/about">About</Link>
                </li>
                <li>Basket: {props.basketProp}</li>
            </ul>
        </nav>
    )
}

export default Nav;