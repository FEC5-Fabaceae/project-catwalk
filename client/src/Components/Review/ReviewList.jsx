import React from 'react';
import PropTypes from 'prop-types';
import ReviewTile from './ReviewTile';

const ReviewList = (props) => {
  const { data } = props;
  const { count, results } = data;
  const reviewTiles = results.map(
    (review) => <ReviewTile key={review.review_id} review={review} />,
  );
  return (
    <section>
      <h1>
        {`${count} reviews, sorted by date`}
      </h1>
      <>{reviewTiles}</>
    </section>
  );
};

ReviewList.propTypes = {
  data: PropTypes.shape({
    product: PropTypes.string,
    page: PropTypes.number,
    results: PropTypes.arrayOf(PropTypes.object).isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReviewList;
