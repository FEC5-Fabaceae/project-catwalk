import React, { useState, useEffect, useContext } from 'react';
import RelatedProduct from './RelatedProduct';
import ProductIdContext from '../Context';

const axios = require('axios');

// send a get request for each related product from the given product id
// render the default style for each related product

const RelatedProductsList = (props) => {
  const value = useContext(ProductIdContext);
  const [productID, setProductID] = useState(value);
  const [arrayOfRelatedProducts, setArray] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/products/${productID}/related`)
      .then((data) => {
        setArray(data.data);
      });
  }, [productID]);
  return (
    <div>
      <h2> Related Products </h2>
      <div>
        {arrayOfRelatedProducts.map((relatedProductID) => (
          <RelatedProduct product={relatedProductID} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProductsList;
