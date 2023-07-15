import React from 'react';
import PropTypes from 'prop-types';

const RRRRCard = ({ item }) => {
  return (
    <div className="card-wrapper" data-testid="rrrr-card">
      <div className="rrrr-card">
        <div className="rrrr-svg-header">
          <img src={item.svg} alt="rrrr-svg" />
          <h2 className="rrrr-header">{item.header}</h2>
        </div>
        <p className="rrrr-header-text">{item.headerText}</p>
      </div>
      <div className="rrrr-transparent-card"></div>
    </div>
  );
};

RRRRCard.propTypes = {
  item: PropTypes.shape({
    svg: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    headerText: PropTypes.string.isRequired
  }).isRequired
};

export default RRRRCard;
