import { NavHashLink } from 'react-router-hash-link';
import '../styles.css';
import Button from '../../../components/Button';
import Text from '../../../components/Text';
import Header from '../../../components/Header';
import star from '../../../assets/star-design.png';
import { imgs } from '../constant';
<<<<<<< HEAD
import { Texts } from '../constant';
=======
>>>>>>> 8822c9c2abb87a6605290487cd79f0730f84cf8f

export const TopSection = () => {
  return (
    <div className="abs-top-main">
      <div className="abs-top-main-star-div ">
        <img className="abs-top-main-star" src={star} alt="star-design" />
      </div>

      <div className="top-header">
        <Header color="primary" className="top-section-header mobile" size="small">
          {Texts.HeaderE} <span className="header-abs">{Texts.HeaderA}</span>
        </Header>
        <Header color="primary" className="top-section-header bigscreen" size="large">
          {Texts.HeaderE} <span className="header-abs">{Texts.HeaderA}</span>
        </Header>

        <Text
          className="top-section-header-text"
          content="We want to inspire people to pursue development in their chosen career paths and then empower them to pay it forward and impact others as
          well."
        />

        <div className="top-cta-container">
          <NavHashLink
            to={{
              pathname: '/ambassador-program',
              hash: '#apply-now'
<<<<<<< HEAD
            }}>
=======
            }}
          >
>>>>>>> 8822c9c2abb87a6605290487cd79f0730f84cf8f
            <Button label={'Become an Ambassador'} type="secondary" />
          </NavHashLink>
        </div>
      </div>

      <div className="abs-top-main-child">
        <div className="ambassador-image-wrapper ">
          {imgs.map((itm, idx) => {
            return (
              <div key={idx} className="slide">
                <img src={itm} className="img" alt="many young people" />
              </div>
            );
          })}
          {imgs.map((itm, idx) => {
            return (
              <div key={idx} className="slide">
                <img src={itm} className="img" alt="many young people" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
