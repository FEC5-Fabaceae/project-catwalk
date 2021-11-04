import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Gallery = () => {
  const [productURL, setProductUrl] = useState('');
  const [styles, setStyles] = useState([]);
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
        setStyles(res.data.results)
        setCurrentStyle(res.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  getProduct();

  return (
        <div className="gallery-wrapper">
          <div className="viewer-wrap">
            <img src={productURL} alt="clothing" className="gallery-image"/>
          </div>
            <div className="thumbnail-gallery">
              <div className="thumbnail-images">
              {currentStyle.photos && currentStyle.photos.map((photo) => (
                <img src={photo.thumbnail_url} style={{ height: '45px', width: '45px'}}/>
              ))}
              {/* <img src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" alt="shirt" />
                <img src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" alt="shirt" />
                <img src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" alt="shirt" />
                <img src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" alt="shirt" />
                <img src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" alt="shirt" />
                <img src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" alt="shirt" />
                <img src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" alt="shirt" /> */}

              </div>
            </div>
          </div>

  );
};

export default Gallery;
