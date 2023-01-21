import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import Logo from '../../assets/edustipend.png';
import './styles.css';

export const NavbarLanding = () => {
	return <nav className='nav-wrapper'>
		<NavLink className='logo-link' to='/'>
			<div className='logo-wrapper'>
				<img className='logo' src={Logo} alt='edustipend-logo' />
				<p className='logo-text'>edustipend</p>
			</div>
		</NavLink>

		<div className='nav-links'>
			<NavHashLink
				className='nav-link'
				to={{
					pathname: '/ambassador-program'
				}}>
				Ambassador Program
			</NavHashLink >
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
				Request Stipend
			</NavHashLink>
		</div>
	</nav>
}