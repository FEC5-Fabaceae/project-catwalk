
import React from 'react';
import Gallery from './Gallery';
import ProductInfo from './ProductInfo';

const Overview = () => (
  // const []
  <div>
    <div>
      <p>
        <em>SITE-WIDE ANNOUNCEMENT MESSAGE! </em>
        — SALE/DISCOUNT
        <b> OFFER</b>
        —
        <a href>NEW PRODUCT HIGHLIGHT</a>
      </p>
    </div>
    <div className="product-overview-container">
      <div className="product-overview-container-left">
        <div className=".galler-wrapper">
          <Gallery />
        </div>
      </div>
      <div className="spacer" />
      <div className="product-overview-container-right">
        <ProductInfo />
      </div>

    </div>
  </div>

);

export default Overview;

