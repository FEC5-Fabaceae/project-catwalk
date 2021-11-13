import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile';
import ProductIdContext from '../Context';
import ReviewForm from './ReviewForm';

const ReviewList = (props) => {
  const { characteristics } = props;
  const [reviews, setReviews] = useState([]);
  const [sort, setSort] = useState('helpful');
  const [count, setCount] = useState(0);
  const [reviewTiles, setReviewTiles] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [numDisplayed, setNumDisplayed] = useState(2);
  const [loadedAll, setLoadedAll] = useState(false);
  const context = useContext(ProductIdContext);
  const { productID, setProductID } = context;
  const [viewForm, setViewForm] = useState(false);

  const getReviews = () => {
    const response = axios({
      method: 'get',
      url: '/reviews/',
      params: {
        product_id: productID,
        sort,
      },
    });
    return response;
  };

  const loadMoreReviews = () => {
    setNumDisplayed(numDisplayed + 2);
    if (numDisplayed >= count) {
      setLoadedAll(true);
    }
  };

  const generateReviewTiles = (filter) => {
    const filteredReviews = reviews.filter(filter).slice(0, numDisplayed);

    setReviewTiles(filteredReviews.map(
      (review) => <ReviewTile key={review.review_id} review={review} />,
    ));
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const handleClickSubmitReview = () => {
    setViewForm(true);
  };

  useEffect(() => {
    getReviews().then((result) => {
      setCount(result.data.count);
      setReviews(result.data.results);

      setLoaded(true);
      generateReviewTiles(() => true);
    });
  }, [isLoaded, numDisplayed, sort]);

  if (isLoaded) {
    return (
      <>
        <section id="review-list">
          <h1 id="review-list-title">RATINGS AND REVIEWS</h1>
          <h2>
            {`${count} reviews, sorted by `}
            <select
              name="sort"
              id="sort-select"
              onInput={handleSort}
            >
              <option value="helpful">helpfulness</option>
              <option value="relevant">relevance</option>
              <option value="newest">date</option>
            </select>
          </h2>
          <>{reviewTiles}</>
          <button
            type="button"
            className="load-more-reviews"
            disabled={loadedAll}
            onClick={loadMoreReviews}
          >
            Load more reviews
          </button>
          <button
            type="button"
            className="submit-review"
            onClick={handleClickSubmitReview}
          >
            Submit a review
          </button>
          {viewForm ? <ReviewForm characteristics={characteristics} /> : ''}
        </section>
      </>
    );
  }
  return (
    <section>
      <h1>RATINGS AND REVIEWS</h1>
      Loading...
    </section>
  );
};

ReviewList.propTypes = {
  characteristics: PropTypes.shape({
    Size: PropTypes.exact({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Width: PropTypes.exact({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Comfort: PropTypes.exact({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Quality: PropTypes.exact({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Length: PropTypes.exact({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Fit: PropTypes.exact({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
  }).isRequired,
};

export default ReviewList;
