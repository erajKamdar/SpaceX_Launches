import React from 'react'
import './Header.css';
import logo from '../Logo/spacex.svg'
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className='Header'>
            <div className='logodiv'>
                <Link to='/'>
                    <img className='logo' src={logo} alt="" />
                </Link>
            </div>
        </div>
    )
}