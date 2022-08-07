import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import Logo from '../../assets/edustipend.png';
import './styles.css';

export const Navbar = () => {
	return <nav className='nav-wrapper'>
		<div className='logo-wrapper'>
			<img className='logo' src={Logo} alt='edustipend-logo' />
			<p className='logo-text'>edustipend</p>
		</div>

		<div className='nav-links'>
			<NavHashLink
				className='nav-link'
				to={{
					pathname: '/',
					hash: '#howitworks',
				}}>
				How it Works
			</NavHashLink >
			<NavHashLink
				className='nav-cta'
				to={{
					pathname: '/',
					hash: '#makerequest',
				}}>
				Request support
			</NavHashLink>
		</div>
	</nav>
}