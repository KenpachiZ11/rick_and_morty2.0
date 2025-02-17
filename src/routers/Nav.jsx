import React from 'react';
import { NavLink } from 'react-router-dom';

// const isActive = ({ isActive }) => isActive ? style['active-link']  : '';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Главная</NavLink>
                </li>
                <li>
                    <NavLink to='/heroes'>Герои</NavLink>
                </li>
                {/* <li>
                    <NavLink to='/about'>About</NavLink>
                </li> */}
            </ul>
        </nav>
    )
}

export default Nav;