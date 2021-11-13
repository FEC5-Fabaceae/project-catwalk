/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect, useContext } from 'react';
import RelatedProduct from './RelatedProduct';
import ProductIdContext from '../Context';

const axios = require('axios');

// send a get request for each related product from the given product id
// render the default style for each related product

const RelatedProductsList = () => {
  const [leftVisible, setLeftVisible] = useState('hidden');
  const [rightVisible, setRightVisible] = useState('visible');
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  const value = useContext(ProductIdContext);
  const [productID, setProductID] = useState(value.productID);
  const [arrayOfRelatedProducts, setArray] = useState([]);
  const [visibleProducts, setVisible] = useState([arrayOfRelatedProducts.slice(0, 2)]);
  useEffect(() => {
    axios.get(`http://localhost:3000/products/${productID}/related`)
      .then((data) => {
        setArray(data.data);
        setVisible(data.data.slice(start, end));
      });
  }, [productID]);
  useEffect(() => {
    setProductID(value.productID);
  }, [value]);
  const previousSlide = () => {
    if (end === arrayOfRelatedProducts.length) {
      setRightVisible('visible');
    }
    if (start - 1 === 0) {
      setLeftVisible('hidden');
    }
    if (start > 0) {
      setStart(start - 1);
      setEnd(end - 1);
      setVisible(arrayOfRelatedProducts.slice(start - 1, end - 1));
    }
  };
  const nextSlide = () => {
    if (start === 0) {
      setLeftVisible('visible');
    }
    if (end + 1 === arrayOfRelatedProducts.length) {
      setRightVisible('hidden');
    }
    if (end < arrayOfRelatedProducts.length) {
      setStart(start + 1);
      setEnd(end + 1);
      setVisible(arrayOfRelatedProducts.slice(start + 1, end + 1));
    }
  };
  return (
    <div className="carousel-row">
      <h2 className="carousel-title"> Related Products </h2>
      <div className="carousel-inner-content">
        <div className="carousel-col carousel-left">
          <button className="fas fa-step-backward" type="button" onClick={previousSlide} style={{ visibility: leftVisible }} />
        </div>
        <div className="carousel-col carousel-center">
          <div className="carousel-viewport">
            <ol className="carousel">
              {visibleProducts.map((relatedProductID) => (
                <RelatedProduct product={relatedProductID} value={value} />
              ))}
            </ol>
          </div>
        </div>
        <div className="carousel-col carousel-goto-right">
          <button className="fas fa-step-forward" type="button" onClick={nextSlide} style={{ visibility: rightVisible }} />
        </div>
      </div>
    </div>
  );
};

export default RelatedProductsList;
