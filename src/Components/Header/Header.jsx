import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className='header-section'>
            <div className="logo">
                <h1><span>R</span>educers</h1>
            </div>
            <nav className='nav'>
                <ul className="nav__list">
                    <li className="nav__list-items">
                        <NavLink to='/' className={link => link.isActive ? 'nav__list-links active' : 'nav__list-links'}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav__list-items">
                        <NavLink to='/states' className='nav__list-links'>
                            with States
                        </NavLink>
                    </li>
                    <li className="nav__list-items">
                        <NavLink to='/reducers' className='nav__list-links'>
                            with Reducers
                        </NavLink>
                    </li>
                </ul>
                <img src="./img/Moji3.jpg" alt="Moji"  className='nav__img'/>
            </nav>

        </header>
    )
}

export default Header