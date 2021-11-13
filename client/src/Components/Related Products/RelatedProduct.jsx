/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import Comparison from './Comparison';
import Stars from '../Star';
import Modal from '../Questions/Modal';

const axios = require('axios');

const RelatedProduct = (props) => {
  const { product } = props;
  const { value } = props;
  // eslint-disable-next-line prefer-const
  const [relatedProductInfo, setProduct] = useState({ name: '', category: '', features: '' });
  const [onSale, setSaleStatus] = useState(false);
  const [stylesInfo, setStylesInfo] = useState({});
  const [ratings, setRatings] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    // get the product name
    if (typeof product === "number") {
      axios.get(`http://localhost:3000/products/${product}`)
        .then((data) => {
          const relatedProduct = data.data;
          const { name } = relatedProduct;
          const { category } = relatedProduct;
          const { features } = relatedProduct;
          setProduct({ name, category, features });
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
    }

    // get the product styles to find the default style and its associated price.
    // also contains the photo we need
    // get the review metadata and calculate average
  }, [product]);
  const modalToggle = () => {
    setModalVisible(true);
  };
  return (
    <li className="carousel-card">
      <button className="far fa-star" type="button" onClick={() => (modalToggle())} />
      {
        modalVisible
          ? (
            <Modal
              setModalVisible={setModalVisible}
              component={(
                <Comparison relatedProductInfo={relatedProductInfo} />
              )}
            />
          )
          : <></>
      }
      <div onClick={() => value.setProductID(() => product.toString())}>
        <div className="related-category">{relatedProductInfo.category}</div>
        <div className="related-name">{relatedProductInfo.name}</div>
        <img src={stylesInfo.photo} alt={relatedProductInfo.name} className="carousel-card carousel-image" />
        <div>
          $
          {stylesInfo.salePrice}
        </div>
        <div>
          <Stars score={ratings} />
        </div>
      </div>
    </li>
  );
};

export default RelatedProduct;
