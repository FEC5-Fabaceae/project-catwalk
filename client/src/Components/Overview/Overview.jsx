import React, { useState } from 'react';
import Gallery from './Gallery';
import ProductInfo from './ProductInfo';

const Overview = () => (
  // const []
  <div>
     <p>
        <em>SITE-WIDE ANNOUNCEMENT MESSAGE! </em>
        —— SALE/DISCOUNT
        <b> OFFER</b>
        ——
        {/* add href  */}
        <a href>NEW PRODUCT HIGHLIGHT</a>
      </p>
    <div className="product-overview-container">
      <div className="product-overview-container-left">
        <Gallery />
      </div>
      <div className="product-overview-container-right">
        <ProductInfo />
      </div>
    </div>
  </div>
);

export default Overview;
