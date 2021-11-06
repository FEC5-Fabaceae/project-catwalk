import React from 'react';
import PropTypes from 'prop-types';
import StackedBar from './StackedBar';

const sumValues = (object) => (
  Object.values(object).reduce((prev, current) => Number(prev) + Number(current))
);

const roundToNearestTenPercent = (decimal) => (
  decimal.toFixed(1).split('.')[1].concat('0')
);

const addNonExistentScores = (ratingsObject) => {
  //
};

const getPercentages = (ratingsObject) => {
  const total = sumValues(ratingsObject);

  return Object.fromEntries(
    Object.entries(ratingsObject)
      .map(
        ([key, value]) => ([key, roundToNearestTenPercent(value / total)]),
      ),
  );
};

const RatingBreakdown = (props) => {
  const { ratings } = props;
  const percentages = getPercentages(ratings);
  const bars = Object.keys(ratings)
    .map(([key, value]) => (
      <StackedBar
        score={key}
        percent={percentages[key]}
        total={value}
      />
    ));
  return (
    <dl id="rating-breakdown">
      <dt><h2>Rating Breakdown</h2></dt>
      <>{bars}</>
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
