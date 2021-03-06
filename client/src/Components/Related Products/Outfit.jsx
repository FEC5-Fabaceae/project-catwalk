/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-shadow */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Stars from '../Star';

const axios = require('axios');

const Outfit = (props) => {
  const { product, arrayOfOutfits, setArray } = props;
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
                for (const key in rating) {
                  totalRatings += parseInt(rating[key], 10);
                }
                for (const key in rating) {
                  totalValues += parseInt(rating[key], 10) * parseInt(key, 10);
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
  const removeProduct = () => {
    // find where in the array of outfits the product is
    let array = arrayOfOutfits.slice();
    if (arrayOfOutfits.length > 0) {
      let index = 0;
      for (let i = 0; i < arrayOfOutfits.length; i += 1) {
        if (arrayOfOutfits[i] === product) {
          index = i;
        }
      }
      if (arrayOfOutfits.length === 1) {
        array = [];
        setArray(() => array);
      } else {
        array.splice(index, 1);
        setArray(() => array);
      }
      // splice starting at that point, going one element.
    }
  };
  return (
    <li className="carousel-card">
      <button className="fas fa-times close-product" type="button" onClick={() => (removeProduct())} />
      <h5>{OutfitProductInfo.category}</h5>
      <h3 className="outfit-product-name">{OutfitProductInfo.name}</h3>
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

Outfit.propTypes = {
  product: PropTypes.string.isRequired,
  arrayOfOutfits: PropTypes.array.isRequired,
  setArray: PropTypes.func.isRequired,
};

export default Outfit;
