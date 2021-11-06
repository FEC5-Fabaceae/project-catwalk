import React from 'react';
import PropTypes from 'prop-types';

const StackedBar = (props) => {
  const { percent, total, score } = props;
  return (
    <dd className="percentage">
      <span className="bar-label">{score}</span>
      <div className={`rating-bar-${percent}`}>
        <div className="filled-rating-bar" />
        <div className="empty-rating-bar">.</div>
        <span className="individual-rating-total">{total}</span>
      </div>
    </dd>
  );
};

StackedBar.propTypes = {
  percent: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default StackedBar;
