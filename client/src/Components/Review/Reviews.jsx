import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ReviewList from './ReviewList';
import Breakdown from './Breakdown';
import ProductIdContext from '../Context';

// import ProductBreakdown from './ProductBreakdown';
// import RatingBreakdown from './RatingBreakdown';

const Reviews = () => {
  const [metadata, setMetadata] = useState({});
  const [isLoaded, setLoaded] = useState(false);
  const context = useContext(ProductIdContext);
  const { productID, setProductID } = context;
  const getMetadata = () => {
    const response = axios({
      method: 'get',
      url: '/reviews/meta',
      params: {
        product_id: productID,
      },
    });
    return response;
  };

  useEffect(() => {
    getMetadata()
      .then((response) => {
        setMetadata(response.data);
        setLoaded(true);
      });
  }, [isLoaded]);
  return (
    <section id="review-section">
      <Breakdown isLoaded={isLoaded} metadata={metadata} />
      <ReviewList />
    </section>
  );
};

export default Reviews;
