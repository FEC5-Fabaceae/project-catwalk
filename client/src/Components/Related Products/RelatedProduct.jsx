import React, { useState, useEffect } from 'react';

const axios = require('axios');

const RelatedProduct = (props) => {
  const { product } = props;
  // eslint-disable-next-line prefer-const
  const [relatedProductInfo, setProduct] = useState({ name: '', category: '' });
  const [onSale, setSaleStatus] = useState(false);
  const [stylesInfo, setStylesInfo] = useState({});
  const [ratings, setRatings] = useState(1);
  useEffect(() => {
    // get the product name
    axios.get(`http://localhost:3000/products/${product}`)
      .then((data) => {
        const relatedProduct = data.data;
        const { name } = relatedProduct;
        const { category } = relatedProduct;
        setProduct({ name, category });
      });
    // get the product styles to find the default style and its associated price.
    // also contains the photo we need
    axios.get(`http://localhost:3000/products/${product}/styles`)
      .then((data) => {
        const styles = data.data.results;
        let defaultStyle = styles[0];
        for (let i = 0; i < styles.length; i += 1) {
          if (styles[i]['default?'] === true) {
            defaultStyle = styles[i];
          }
        }
        const photo = defaultStyle.photos[0].thumbnail_url;
        let salePrice = defaultStyle.original_price;
        if (defaultStyle.sale_price !== null) {
          setSaleStatus(true);
          salePrice = defaultStyle.sale_price;
        }
        setStylesInfo({
          photo,
          salePrice,
        });
      });
    // get the review metadata and calculate average
    axios.get('http://localhost:3000/reviews/meta', { data: { product_id: product } })
      .then((data) => {
        const rating = data.data.ratings;
        const totalRatings = (rating['1'] + rating['2'] + rating['3'] + rating['4'] + rating['5']);
        const totalValues = ((rating['1'] * 1) + (rating['2'] * 2) + (rating['3'] * 3) + (rating['4'] * 4) + (rating['5'] * 5));
        const average = (totalValues / totalRatings);
        setRatings(average);
      });
  }, [relatedProductInfo]);
  return (

    <div>
      <h5> Product Category </h5>
      <h3>{relatedProductInfo}</h3>
      <div>
        $
        {stylesInfo.salePrice}
      </div>
      <div>
        Star Rating:
        {ratings}
      </div>
    </div>
  );
};

export default RelatedProduct;
