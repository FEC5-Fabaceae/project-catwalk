import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [productURL, setProductUrl] = useState('');
  const getProduct = () => {
    axios.get('/products/40350/styles')
      .then((res) => {
        console.log(res.data.results[0].photos[0].url);
        setProductUrl(res.data.results[0].photos[0].url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getProduct();
  return (
    <div className="left-column">
      <img src={productURL} alt="clothing" />
    </div>
  );
};

export default Gallery;
