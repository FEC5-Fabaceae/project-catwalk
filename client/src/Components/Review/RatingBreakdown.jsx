import React from 'react';
import PropTypes from 'prop-types';

const sumValues = (object) => (
  Object.values(object).reduce((prev, current) => Number(prev) + Number(current))
);

const getPercentages = (ratingsObject) => {
  const total = sumValues(ratingsObject);
  return Object.fromEntries(
    Object.entries(ratingsObject).map(
      ([key, value]) => ([key, (value / total).toFixed(2)]),
    ),
  );
};

const getDisplayPercentage = (decimalString) => (decimalString.split('.')[1].concat('%'));

const RatingBreakdown = (props) => {
  const { ratings } = props;
  const percentages = getPercentages(ratings);

  return (
    <dl id="rating-breakdown">
      <dt><h2>Rating Breakdown</h2></dt>
      <dd className="percentage">
        <span className="text">{`5: ${getDisplayPercentage(percentages[5])}`}</span>
      </dd>
      <dd className="percentage">
        <span className="text">{`4: ${getDisplayPercentage(percentages[4])}`}</span>
      </dd>
      <dd className="percentage">
        <span className="text">{`3: ${getDisplayPercentage(percentages[3])}`}</span>
      </dd>
      <dd className="percentage">
        <span className="text">{`2: ${getDisplayPercentage(percentages[2])}`}</span>
      </dd>
      <dd className="percentage">
        <span className="text">{`1: ${getDisplayPercentage(percentages[1])}`}</span>
      </dd>
    </dl>
  );
};

RatingBreakdown.propTypes = {
  ratings: PropTypes.exact({
    1: PropTypes.number,
    2: PropTypes.number,
    3: PropTypes.number,
    4: PropTypes.number,
    5: PropTypes.number,
  }).isRequired,
};

export { sumValues, getPercentages };
export default RatingBreakdown;
