import React from 'react';
import { NavLink } from 'react-router-dom';

// const isActive = ({ isActive }) => isActive ? style['active-link']  : '';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/info'>Info</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;