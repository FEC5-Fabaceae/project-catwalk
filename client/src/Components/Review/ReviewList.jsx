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
  useEffect(() => {
    getReviews('relevant').then((result) => {
      setCount(result.data.count);
      setReviews(result.data.results);
      console.log(reviews, sort, count);
      setLoaded(true);
      setReviewTiles(reviews.map(
        (review) => <ReviewTile key={review.review_id} review={review} />,
      ));
    });
  }, [isLoaded]);

  if (isLoaded) {
    return (
      <section>
        <h1>
          {`${count} reviews, sorted by date`}
        </h1>
        <>{reviewTiles}</>
      </section>
    );
  }
  return <section>Loading...</section>;
};

export default ReviewList;
