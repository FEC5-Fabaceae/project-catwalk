import React from 'react';
import PropTypes from 'prop-types';
import StackedBar from './StackedBar';
import Stars from '../Star';

const sumValues = (object) => (
  Object.values(object).reduce((prev, current) => Number(prev) + Number(current))
);

const roundToNearestTenPercent = (decimal) => (
  decimal.toFixed(1).split('.')[1].concat('0')
);

const addNonExistentScores = (ratingsObject) => {
  //
};

const getAverageScore = (ratingsObject) => {
  const sumReducer = (prev, current) => Number(prev) + Number(current);
  const total = Object.values(ratingsObject).reduce(sumReducer);
  return (Object.keys(ratingsObject)
    .map((key) => ratingsObject[key] * key)
    .reduce(sumReducer) / total)
    .toFixed(2);
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
        key={key}
      />
    ));
  const average = getAverageScore(ratings);
  return (
    <dl id="rating-breakdown">
      <dt><h2>Rating Breakdown</h2></dt>
      <span className="average-score">{average}</span>
      <Stars score={Number(average)} />
      <>{bars}</>
    </dl>
  );
};

RatingBreakdown.propTypes = {
  ratings: PropTypes.shape({
    1: PropTypes.number,
    2: PropTypes.number,
    3: PropTypes.number,
    4: PropTypes.number,
    5: PropTypes.number,
  }).isRequired,
};

export { sumValues, getPercentages };
export default RatingBreakdown;
