import React from 'react';
import sampleData from './sampleData';
import ReviewList from './ReviewList';
// import ProductBreakdown from './ProductBreakdown';
// import RatingBreakdown from './RatingBreakdown';

const Reviews = () => (
  <section className="reviewSection">
    <h1>RATINGS AND REVIEWS</h1>
    <ReviewList data={sampleData} />
  </section>
);

export default Reviews;
