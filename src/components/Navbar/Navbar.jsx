import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavbarAmbassador } from './NavbarAmbassador';
import { NavbarLanding } from './NavbarLanding';
import './styles.css';


export const Navbar = () => {
	const { pathname } = useLocation();
	const isAmbassador = pathname === '/ambassador-program';
	const NavbarToShow = isAmbassador ? <NavbarAmbassador /> : <NavbarLanding />
	return NavbarToShow
}