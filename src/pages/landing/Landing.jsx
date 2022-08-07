import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './styles.css';
import Achieve from '../../assets/achieve.svg';
import Request from '../../assets/request.svg';
import Receive from '../../assets/receive.svg';
import Review from '../../assets/review.svg';
import StudentImage from '../../assets/image_student.png';
import PhoneImage from '../../assets/image_phone.png';
import HandshakeImage from '../../assets/image_handshake.png';


const TopSection = () => {
	return (
		<div className='top-main'>
			<div className='top-main-child'>
				<h1 className='page-header header-primary'>Need support for your learning?</h1>
				<h3 className='page-subheader'>Get funding for your learning needs from anonymous and from people who care</h3>
				<div className='top-cta-container'>
					<NavHashLink
						className='btn btn-primary'
						to={{
							pathname: '/',
							hash: '#makerequest',
						}}>
						Request support
					</NavHashLink>

					<NavHashLink
						className='btn btn-universal'
						to={{
							pathname: '/',
							hash: '#howitworks',
						}}>
						Learn how it works
					</NavHashLink>

					{/* <button className='btn-primary'>
						Request support
					</button> 
					<button className='btn btn-universal'>
						Learn how it works
					</button>*/}
				</div>
			</div>
			<div className='top-main-child image-banner'>
				<div>
					<img src={StudentImage} className='student-image' alt='boy studying' />
				</div>
				<div className='image-desktop-only'>
					<img src={PhoneImage} className='phone-image' alt='phone showing $100' />
					<img src={HandshakeImage} alt='two hands locked in a shake' />
				</div>
			</div>
		</div>
	)
}

const displayCards = [
	{
		icon: Request,
		text: `Start by completing the Request Support form stating
		of what you need the funds for and proof of why you need the support. The
		form will be made available from the 1st- 8th of every month`,
		title: 'Request'
	},
	{
		icon: Review,
		text: `Each request made will be reviewed by the team and by prospective sponsors athenticity.
		Some request types may have longer review time than others`,
		title: 'Review'
	},
	{
		icon: Receive,
		text: `Once your request approveed to post a request
		of what you need the funds for and some proof of why you need the support`,
		title: 'Receive'
	},
	{
		icon: Achieve,
		text: `Go on to achieve your dreams you will be expected to post a request
		of what you need the funds for and some proof of why you need the support`,
		title: 'Achieve'
	}
]

export const MidSection = () => (
	<div className='background-lightblue'>
		<div className='middle-main' id="howitworks">
			<div className='section-child middle-main-left'>
				<h2 className='section-header'>The 3Rs & 1A</h2>
				<p className='page-text'>The <b>3Rs</b>: <b>R</b>equest, <b>R</b>eview, <b>R</b>eceive describe the process for requesting support.</p>
				<p className='page-text'>Our goal is to help get you to <b>A</b> - our desired end result, which is to <b>A</b>chieve. To achieve your learning goals.</p>
				{/* <button className='top-cta-btn btn-primary'>
				Submit A Request
			</button> */}
			</div>
			<div className='section-child display-cards-container'>
				{
					displayCards.map((card) => (
						<div className='display-card'>
							<div className='display-card-title'>
								<img src={card.icon} alt='icon' height={24} />
								<p>{card.title}</p>
							</div>
							<div className='display-card-text'>
								{card.text}
							</div>
						</div>
					))
				}
			</div>
		</div>
	</div>
)

export const RequestSection = () => (
	<div className='bottom-main' id='makerequest'>
		<h2 className='section-header'>Submit Request</h2>
		<div>
			<iframe class='request-form' title='google-form' src="https://docs.google.com/forms/d/e/1FAIpQLSdfx4--shKmiItghxIttXUMWvbe9i1cjf6kuNi_VR2BqKjyxA/viewform?embedded=true" width="640" height="1010" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
		</div>
	</div>
)

export const Landing = () => {

	/**
	 * TODO:
	 * - Publish to firebase webapp
	 * - Publish to edustipend.org
	 */

	return (
		<main>
			<TopSection />
			<MidSection />
			<RequestSection />
		</main>
	)
}