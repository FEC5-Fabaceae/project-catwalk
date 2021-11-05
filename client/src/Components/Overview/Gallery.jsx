import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [productURL, setProductUrl] = useState('');

  const [currentStyle, setCurrentStyle] = useState([]);

  const getProduct = () => {
    axios.get('/products/40348/styles')
      .then((res) => {
        setProductUrl(res.data.results[0].photos[0].url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios.get('/products/40348/styles')
      .then((res) => {
        setCurrentStyle(res.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  getProduct();

  return (
    <div className="gallery-wrapper">
      <div className="viewer-wrap">
        <img src={productURL} alt="clothing" className="gallery-image" />
      </div>
      <div className="thumbnail-gallery">
        <div className="thumbnail-images">
          {currentStyle.photos && currentStyle.photos.map((photo) => (
            <>
              <img src={photo.thumbnail_url} style={{ height: '49px', width: '49px' }} alt="clothing" />
            </>
          ))}
        </div>
        gallery
      </div>
    </div>
  );
};

export default Gallery;
