import React from 'react';
import PropTypes from 'prop-types';
import RatingBreakdown from './RatingBreakdown';

const Breakdown = (props) => {
  const { isLoaded, metadata } = props;

  if (isLoaded) {
    return (
      <aside>
        <RatingBreakdown ratings={metadata.ratings} />
      </aside>
    );
  } return (<aside>Loading...</aside>);
};

Breakdown.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  metadata: PropTypes.shape({
    ratings: PropTypes.shape({
      1: PropTypes.string,
      2: PropTypes.string,
      3: PropTypes.string,
      4: PropTypes.string,
      5: PropTypes.string,
    }),
  }).isRequired,
};

export default Breakdown;
