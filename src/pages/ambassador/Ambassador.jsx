import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './styles.css';
import AmbassadorImage from '../../assets/ambassador.png';

const TopSection = () => {
	return (
		<div className='top-main'>
			<div className='top-main-child'>
				<h1 className='page-header'>
					<p>Edustipend</p>
					<p>Ambas<span class='header-primary'>sador</span></p>
					<p>Program</p>
				</h1>
				<h3 className='page-subheader'>We want to inspire people to puruse personal development in their chosen career paths and provide them with resources to pay it forward</h3>
				<div className='top-cta-container'>
					<NavHashLink
						className='btn btn-primary'
						to='#'
					// to={{
					// 	pathname: '/',
					// 	hash: '#makerequest',
					// }}
					>
						Coming soon
					</NavHashLink>
				</div>
			</div>
			<div className='top-main-child image-banner'>
				<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<img src={AmbassadorImage} className='ambassador-image' alt='image of many young people' />
				</div>
			</div>
		</div>
	)
}

export const Ambassador = () => {
	return (
		<main>
			<TopSection />
		</main>
	)
}