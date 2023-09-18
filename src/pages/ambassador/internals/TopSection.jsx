import AmbassadorImage from '../../../assets/ambassador.png';
import { NavHashLink } from 'react-router-hash-link';
import '../styles.css';
import Button from '../../../components/Button';
import Text from '../../../components/Text';
import Header from '../../../components/Header';

export const TopSection = () => {
  return (
    <div className="top-main">
      <div className="top-main-child">
        <h1 className="page-header">
          <Header>Edustipend</Header>
          <Header className="header-primary">Ambassador</Header>
          <Header>Program</Header>
          {/* Ambas<span className="header-primary">sador</span> */}
        </h1>
        <Text
          className="page-subheader"
          content="We want to inspire people to pursue development in their chosen career paths and then empower them to pay it forward and impact others as
          well."
        />

        <div className="top-cta-container">
          <NavHashLink
            // className="btn btn-primary"
            to={{
              pathname: '/ambassador-program',
              hash: '#apply-now'
            }}>
            <Button label={'Apply Now'} type="primary" />
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
