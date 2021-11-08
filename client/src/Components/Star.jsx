import React from 'react';
import PropTypes from 'prop-types';

const indexOfMin = (arr) => {
  let min = null;
  let index = null;
  for (i = 0; i < arr.length; i++) {
    if (min === null) {
      [min, index] = [arr[i], i];
    } else if (arr[i] < min) {
      [min, index] = [arr[i], i];
    }
  }
  return index;
}

const roundToNearestQuarter = (float) => {
  const base = Math.floor(float);
  const comparisonValues = [
    base,
    base + .25,
    base + .5,
    base + .75,
  ];
  const differences = comparisonValues.map((num) => Math.abs(num-float))
  return comparisonValues[indexOfMin(differences)].toFixed(2);
}

const Star = (props) => {
  const { percent } = props;
  return (
    <div className={`star-${percent} fas fa-star`}></div>
  )
}

const Stars = (props) => {
  const { score } = props;
  const rounded = roundToNearestQuarter(score);
  const [base, percent] = String(rounded).split('.');
  const fullStars = Array(base).map(() => <Star percent={100} />);
  return (
    <div className="stars">
      {fullStars}
      <Star percent={percent} />
    </div>
  );
};

Star.propTypes = {
  percent: PropTypes.oneOf(['00', '25', '50', '75', '100'])
}

Stars.propTypes = {
  score: //FIXME
};

export default Stars;
