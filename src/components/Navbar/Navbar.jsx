import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/edustipend.png';
import './styles.css';

export const Navbar = () => {
	return <nav className='nav-wrapper'>
		<div className='logo-wrapper'>
			<img className='logo' src={Logo} alt='edustipend-logo' />
			<p className='logo-text'>edustipend</p>
		</div>

		<div className='nav-links'>
			<NavLink className='nav-link' to='/'>How it works</NavLink>
			<NavLink className='nav-cta' to='/'>Make request</NavLink>
		</div>
	</nav>
}