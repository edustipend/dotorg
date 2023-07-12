import React from 'react';
import PropTypes from 'prop-types';

const RRRRCard = ({ item }) => {
  return (
    <div className="Card-Wrapper" data-testid="rrrr-card">
      <div className="RRRR-Card">
        <div className="RRRR-SVG-header">
          <img src={item.svg} alt="RRRR-SVG" />
          <h2 className="RRRR-header">{item.header}</h2>
        </div>
        <p className="RRRR-headerText">{item.headerText}</p>
      </div>
      <div className="RRRR-Transparent-Card"></div>
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
