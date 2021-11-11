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
      <p>{feature}</p>
      <p>{currentProductValue}</p>
      <p>{relatedProductValue}</p>
    </div>
  );
};
export default Feature;
