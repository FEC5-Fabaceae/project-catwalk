import React, { useState, useEffect } from 'react';
import Stars from '../Star';

const axios = require('axios');

const Outfit = (props) => {
  const { product } = props;
  const [OutfitProductInfo, setProduct] = useState({ name: '', category: '' });
  const [onSale, setSaleStatus] = useState(false);
  const [stylesInfo, setStylesInfo] = useState({});
  const [ratings, setRatings] = useState(1);
  useEffect(() => {
    // get the product name
    axios.get(`http://localhost:3000/products/${product}`)
      .then((data) => {
        const relatedProduct = data.data;
        const { name, category } = relatedProduct;
        setProduct({ name, category });
        axios.get(`http://localhost:3000/products/${product}/styles`)
          .then((result) => {
            const styles = result.data.results;
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

    <li className="carousel-card">
      <i className="far fa-star" type="button" />
      <h5>{OutfitProductInfo.category}</h5>
      <h3>{OutfitProductInfo.name}</h3>
      <img src={stylesInfo.photo} alt={OutfitProductInfo.name} className="carousel-card carousel-image" />
      <div>
        $
        {stylesInfo.salePrice}
      </div>
      <div>
        <Stars score={ratings} />
      </div>
    </li>
  );
};

export default Outfit;
