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
            axios({
              method: 'get',
              url: 'http://localhost:3000/reviews/meta',
              params: {
                product_id: product,
              },
            })
              .then((data) => {
                const rating = data.data.ratings;
                let totalRatings = 0;
                let totalValues = 0;
                let index = 1;
                for (let key in rating) {
                  totalRatings = totalRatings + parseInt(rating[key], 10);
                }
                for (let key in rating) {
                  totalValues = totalValues + parseInt(rating[key], 10) * parseInt(key, 10);
                }
                const average = (totalValues / totalRatings);
                setRatings(average);
              });
          });
      });
    // get the product styles to find the default style and its associated price.
    // also contains the photo we need
    // get the review metadata and calculate average
  }, [product]);
  return (

    <div>
      <h5>{relatedProductInfo.category}</h5>
      <h3>{relatedProductInfo.name}</h3>
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
