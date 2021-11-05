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
  const productId = useContext(ProductIdContext);

  const getReviews = () => {
    const response = axios({
      method: 'get',
      url: '/reviews/',
      params: {
        product_id: productId,
        sort,
      },
    });
    return response;
  };

  const generateReviewTiles = (filter) => {
    const filteredReviews = reviews.filter(filter);
    setReviewTiles(filteredReviews.map(
      (review) => <ReviewTile key={review.review_id} review={review} />,
    ));
  };

  useEffect(() => {
    getReviews('relevant').then((result) => {
      setCount(result.data.count);
      setReviews(result.data.results);
      console.log(reviews, sort, count);
      setLoaded(true);
      generateReviewTiles(() => true);
    });
  }, [isLoaded]);

  if (isLoaded) {
    return (
      <section id="review-list">
        <h1>RATINGS AND REVIEWS</h1>
        <h2>
          {`${count} reviews, sorted by date`}
        </h2>
        <>{reviewTiles}</>
      </section>
    );
  }
  return <section>Loading...</section>;
};

export default ReviewList;
