import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile';
import ProductIdContext from '../Context';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [sort, setSort] = useState('relevant');
  const [count, setCount] = useState(0);
  const [reviewTiles, setReviewTiles] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [numDisplayed, setNumDisplayed] = useState(2);
  const [loadedAll, setLoadedAll] = useState(false);
  const context = useContext(ProductIdContext);
  const { productID, setProductID } = context;
  // const [productId, setProductId] = context;

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

  const sortTypes = {
    // api settings mapped to nouns
    relevant: 'relevance',
    newest: 'date',
    helpful: 'helpfulness',
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

  useEffect(() => {
    getReviews().then((result) => {
      setCount(result.data.count);
      setReviews(result.data.results);
      setLoaded(true);
      generateReviewTiles(() => true);
    });
  }, [isLoaded, numDisplayed]);

  if (isLoaded) {
    return (
      <section id="review-list">
        <h1>RATINGS AND REVIEWS</h1>
        <h2>
          {`${count} reviews, sorted by ${sortTypes[sort]}`}
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
        >
          Submit a review
        </button>
      </section>
    );
  }
  return (
    <section>
      <h1>RATINGS AND REVIEWS</h1>
      Loading...
    </section>
  );
};

export default ReviewList;
