import React from 'react';
import PropTypes from 'prop-types';

const indexOfMin = (arr) => {
  let min = null;
  let index = null;
  for (let i = 0; i < arr.length; i++) {
    if (min === null) {
      [min, index] = [arr[i], i];
    } else if (arr[i] < min) {
      [min, index] = [arr[i], i];
    }
  }
  return index;
};

const roundToNearestQuarter = (float) => {
  const base = Math.floor(float);
  const comparisonValues = [
    base,
    base + 0.25,
    base + 0.5,
    base + 0.75,
  ];
  const differences = comparisonValues.map((num) => Math.abs(num-float))
  return comparisonValues[indexOfMin(differences)].toFixed(2);
};

const Star = (props) => {
  const { percent } = props;
  return (
    <i className={`star-${percent} fas fa-star`} />
  );
};

const Stars = (props) => {
  const { score } = props;
  const rounded = roundToNearestQuarter(score);
  const [base, percent] = String(rounded).split('.');
  const numEmptyStars = percent !== '00' ? 5 - Number(base) - 1
    : 5 - Number(base);
  const filledStars = [...Array(Number(base))].map(() => <Star percent="100" />);
  const emptyStars = numEmptyStars > 0
    ? [...Array(numEmptyStars)].map(() => <Star percent="00" />)
    : '';
  const fractionalStar = percent !== '00' ? <Star percent={percent} /> : '';
  return (
    <div className="stars">
      {filledStars}
      {fractionalStar}
      {emptyStars}
    </div>
  );
};

Star.propTypes = {
  percent: PropTypes.oneOf(['00', '25', '50', '75', '100']).isRequired,
};

Stars.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Stars;
