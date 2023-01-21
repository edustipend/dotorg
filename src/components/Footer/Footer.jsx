import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/edustipend.png';


export const Footer = (props) => {
	return (
		<footer className='footer-wrapper'>
			<div className='footer-container'>
				<div className='footer-icons-container'>
					<div className='footer-icon'>
						<Link to={{ pathname: '/', version: props.version }}>
							<img src={Logo} height='32' alt='edustipend-logo' aria-label='Edustipend Logo' />
						</Link>
						<p className='logo-text'>edustipend</p>
					</div>

					<div className='footer-social-icons'>
						<a href="https://www.facebook.com/edustipend" target="_blank" rel="noopener noreferrer"><div className='social-icon fb-icon'></div></a>
						<a href="https://www.instagram.com/edustipend" target="_blank" rel="noopener noreferrer"><div className='social-icon ig-icon'></div></a>
						<a href="https://www.twitter.com/edustipend" target="_blank" rel="noopener noreferrer"><div className='social-icon tw-icon'></div></a>
					</div>
				</div>

				<div className='flex-row-spacebetween footer-copyright'>
					<p className='paragraph-xs secondary'>
						&copy; 2022 All rights reserved.
					</p>
					<p className='footer-follow-us'>
						Follow us on social media, we are fun!
					</p>
				</div>

			</div>

		</footer>
	)
}