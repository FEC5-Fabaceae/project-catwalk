import React from 'react';
import ReviewList from './ReviewList';
import Breakdown from './Breakdown';
// import ProductBreakdown from './ProductBreakdown';
// import RatingBreakdown from './RatingBreakdown';

const Reviews = () => (
  <section id="review-section">
    <h1>RATINGS AND REVIEWS</h1>
    <Breakdown />
    <ReviewList />
  </section>
);

export default Reviews;
