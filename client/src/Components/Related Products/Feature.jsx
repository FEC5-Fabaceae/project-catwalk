import React, { useState, useEffect, useContext } from 'react';

const Feature = (props) => {
  let { currentProductValue, relatedProductValue } = props;
  const { feature } = props;
  // if feature value is true, render a checkmark, otherwise, show value
  if (relatedProductValue === null) {
    relatedProductValue = '';
  }
  if (currentProductValue === null) {
    currentProductValue = '';
  }

  return (
    <div className="feature-comparison">
      <p className="compared-feature">{feature}</p>
      <p className="first-product-feature">{currentProductValue}</p>
      <p className="second-product-feature">{relatedProductValue}</p>
    </div>
  );
};
export default Feature;
