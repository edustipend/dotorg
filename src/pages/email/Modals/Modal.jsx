import React from 'react';
import arrowLeft from '../../../assets/email/verificationFlow/CaretLeft.png';
import PropTypes from 'prop-types';
import './styles.css';
import { Button } from '../../../components/Button/Button';
import { Link } from 'react-router-dom';

export const Modal = ({ goBack = true, imageIcon, imageIconAlt, heading, mainIfo, dontCrtAcc = false, quote, 
  btnLable, handleClick, goBackLink }) => {
  return (
    <div className="Modal-container">
      <div className="Modal-outer"></div>
      <div className="Modal-inner" style={{ zIndex: 1 }}>
        {goBack && (
          <div className="modal-arrow-back">
            <Link to={`${goBackLink}`}>
              <img src={arrowLeft} alt="Go Back" />
            </Link>
          </div>
        )}

        <div className="modal-info">
          <img src={imageIcon} alt={imageIconAlt} />
          <h2>{heading}</h2>
          <p>{mainIfo}</p>
          <div className="btn-area">
            {dontCrtAcc && (
              <Link to="/demo-create">
                <Button label="No, Thanks" backgroundColor="white" />
              </Link>
            )}

            <Button label={btnLable} primary={true} onClick={handleClick} />
          </div>

          <p className="mail-qoutes">{quote}</p>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  goBack: PropTypes.bool,
  dontCrtAcc: PropTypes.bool,
  imageIconAlt: PropTypes.string,
  imageIcon: PropTypes.string,
  heading: PropTypes.string,
  mainIfo: PropTypes.string,
  quote: PropTypes.string,
  goBackLink: PropTypes.string,
  btnLable: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

Modal.defaultProps = {
  // goBack: true,
  // dontCrtAcc: false,
  heading: 'Add Header Here',
  mainIfo: 'Add Description here',
  quote: 'Add a quote here',
  btnLable: 'Add button',
  handleClick: undefined
};
