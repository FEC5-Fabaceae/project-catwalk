import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ReviewTile = (props) => {
  const { review } = props;
  const { rating, summary, body, date, reviewer_name, helpfulness, review_id} = review;
  const star = '★';
  const emptyStar = '☆';
  const filledStars = star.repeat(Math.floor(rating));
  const emptyStars = emptyStar.repeat(5 - Math.floor(rating));
  return (
    <article>
      <h1>{filledStars + emptyStars}</h1>
      <h2>
        {reviewer_name}
        {moment(date).format('MMMM D, YYYY')}
      </h2>
      <h1>{summary}</h1>
      <p>{body}</p>
      <p>
        Helpful?
        <button type="button">Yes</button>
        (
        {helpfulness}
        )
      </p>
    </article>
  );
};

ReviewTile.propTypes = {
  review: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    reviewer_name: PropTypes.string.isRequired,
    helpfulness: PropTypes.number.isRequired,
    review_id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReviewTile;
