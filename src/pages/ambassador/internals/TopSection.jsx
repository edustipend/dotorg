import youngperson from '../../../assets/P1.png';
import youngperson2 from '../../../assets/P2.png';
import youngperson3 from '../../../assets/P3.png';
import youngperson4 from '../../../assets/P4.png';
import { NavHashLink } from 'react-router-hash-link';
import '../styles.css';
import Button from '../../../components/Button';
import Text from '../../../components/Text';
import Header from '../../../components/Header';

export const TopSection = () => {
  return (
    <div className="abs-top-main">
      <div className="top-header">
        <Header color="primary" className="header" size="medium">
          Edustipend <span className='header-abs'>Ambassador</span> Program
        </Header>

        <Text
          className="subheader"
          content="We want to inspire people to pursue development in their chosen career paths and then empower them to pay it forward and impact others as
          well."
        />

        <div className="top-cta-container">
          <NavHashLink
            to={{
              pathname: '/ambassador-program',
              hash: '#apply-now'
            }}>
            <Button label={'Become an Ambassador'} type="secondary" />
          </NavHashLink>
        </div>
      </div>
      <div className="abs-top-main-child image-banner">
        <div className="ambassador-image-wrapper ">
          <img src={youngperson} className="ambassador-image" alt="many young people" />
          <img src={youngperson2} className="ambassador-image" alt="many young people" />
          <img src={youngperson3} className="ambassador-image" alt="many young people" />
          <img src={youngperson4} className="ambassador-image" alt="many young people" />
          <img src={youngperson} className="ambassador-image" alt="many young people" />
          <img src={youngperson2} className="ambassador-image" alt="many young people" />
          <img src={youngperson3} className="ambassador-image" alt="many young people" />
          <img src={youngperson4} className="ambassador-image" alt="many young people" />
        </div>
      </div>
    </div>
  );
};
