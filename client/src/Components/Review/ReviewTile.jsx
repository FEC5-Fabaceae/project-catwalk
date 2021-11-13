import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Stars from '../Star';

const ReviewTile = (props) => {
  const { review } = props;
  const {
    rating, summary, body, date, reviewer_name, helpfulness, recommend,
  } = review;
  return (
    <article className="review-tile">
      <header className="review-header">
        <h1 className="review-score"><Stars score={rating} /></h1>
        <h3 className="review-nickname">
          {`By: ${reviewer_name}`}
          {'\t'}
          <time>{moment(date).format('MMMM D, YYYY')}</time>
        </h3>
      </header>
      <h1 className="summary">{summary}</h1>
      <p>{body}</p>
      {recommend === true
        ? (
          <p>
            <i className="checkmark fas fa-check" />
            <span> I recommend this product.</span>
          </p>
        )
        : null}
      <p>
        Helpful?
        {'\t'}
        <button type="button">Yes</button>
        (
        {helpfulness}
        )
        &#124;
        {'\t'}
        <button type="button">Report</button>
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
