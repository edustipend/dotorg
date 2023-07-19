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
import Footer from '../../components/Footer';
const TopSection = () => {
  return (
    <div className="top-main">
      <div className="top-main-child">
        <h1 className="page-header">
          <p>
            Need some <span className="header-primary">stipend</span> for your learning?
          </p>
        </h1>
        <h3 className="page-subheader">Get funding for your learning needs from anonymous folks and from people who care</h3>
        <div className="top-cta-container">
          <NavHashLink
            className="btn btn-primary"
            to={{
              pathname: '/',
              hash: '#makerequest'
            }}
          >
            Request stipend
          </NavHashLink>

          <NavHashLink
            className="btn btn-universal"
            to={{
              pathname: '/',
              hash: '#howitworks'
            }}
          >
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
      <div className="top-main-child image-banner">
        <div>
          <img src={StudentImage} className="student-image" alt="boy studying" />
        </div>
        <div className="image-desktop-only">
          <img src={PhoneImage} className="phone-image" alt="phone showing $100" />
          <img src={HandshakeImage} alt="two hands locked in a shake" />
        </div>
      </div>
    </div>
  );
};

const displayCards = [
  {
    icon: Request,
    text: `Complete the Request form (see below) stating
		what type of support you need with proof of why you need the support. The
		request form will be made open from the 1st - 8th of every month.`,
    title: 'Request'
  },
  {
    icon: Review,
    text: `Each request will be reviewed by the team and by sponsors for authenticity and genuine need
		among other criteria. Some request types may have longer review times than others.`,
    title: 'Review'
  },
  {
    icon: Receive,
    text: `Once your request is approved, you will be notified accordingly and the Edustipend team will disburse the support requested.
		While in some cases actual cash will be disbursed, in some other cases we will disburse the specific need not cash.`,
    title: 'Receive'
  },
  {
    icon: Achieve,
    text: `Our hope is that with this support, you can go on to achieve your dreams. Because that's all we really want
		- we want you to be the best version of yourself, we are rooting for you!`,
    title: 'Achieve'
  }
];

export const MidSection = () => (
  <div className="background-lightblue">
    <div className="middle-main" id="howitworks">
      <div className="section-child middle-main-left">
        <h2 className="section-header">The 3Rs & 1A</h2>
        <p className="page-text">
          The <b>3Rs</b>: <b>R</b>equest, <b>R</b>eview, <b>R</b>eceive describe the process for requesting support.
        </p>
        <p className="page-text">
          Our goal is to help get you to <b>A</b> - our desired end result, which is to <b>A</b>
          chieve. To achieve your learning goals.
        </p>
        {/* <button className='top-cta-btn btn-primary'>
				Submit A Request
			</button> */}
      </div>
      <div className="section-child display-cards-container">
        {displayCards.map((card) => (
          <div className="display-card" key={card.text}>
            <div className="display-card-title">
              <img src={card.icon} alt="icon" height={24} />
              <p>{card.title}</p>
            </div>
            <div className="display-card-text">{card.text}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const RequestSection = () => (
  <div className="bottom-main" id="makerequest">
    <h2 className="section-header">Submit Request</h2>
    <div>
      <iframe
        class="request-form"
        title="stipend-request-form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSflEC5PHT0kte5ukQz0vKXBiGefPUHMH5cPnJf8vVPnN6IESA/viewform?embedded=true"
        width="640"
        height="1010"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
      {/* <iframe class='request-form' title='google-form' src="https://docs.google.com/forms/d/e/1FAIpQLSeFO2YrNTYa9YIHyNlPnh8cruDKVswfu1yLsLXWS-YwDneL0A/viewform?embedded=true" width="640" height="310" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
    </div>
  </div>
);

export const Landing = () => {
  return (
    <main>
      <TopSection />
      <MidSection />
      <RequestSection />
      <Footer />
    </main>
  );
};
