import AmbassadorImage from '../../../assets/ambassador.png';
import { NavHashLink } from 'react-router-hash-link';
import '../styles.css';
import { Button } from '../../../components/Button/Button';

export const TopSection = () => {
  return (
    <div className="top-main">
      <div className="top-main-child">
        <h1 className="page-header">
          <p>Edustipend</p>
          <p>
            Ambas<span className="header-primary">sador</span>
          </p>
          <p>Program</p>
        </h1>
        <h3 className="page-subheader">
          We want to inspire people to pursue development in their chosen career paths and then empower them to pay it forward and impact others as
          well.
        </h3>
        <div className="top-cta-container">
          <NavHashLink
            to={{
              pathname: '/ambassador-program',
              hash: '#apply-now'
            }}>
            <Button label={'Apply Now'} />
          </NavHashLink>
        </div>
      </div>
      <div className="top-main-child image-banner">
        <div className="ambassador-image-wrapper">
          <img src={AmbassadorImage} className="ambassador-image" alt="many young people" />
        </div>
      </div>
    </div>
  );
};
