import React, { useState } from 'react';
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
        {/* add href  */}
        <a href>NEW PRODUCT HIGHLIGHT</a>
      </p>

        <Gallery />
      </div
        <ProductInfo />
      </div>
    </div>
  </div>
);

export default Overview;

