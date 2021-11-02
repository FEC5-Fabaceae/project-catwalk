import React, { useState } from 'react';

const Overview = () => (
  <div>
    <div>
      <p>
        <em>SITE-WIDE ANNOUNCEMENT MESSAGE! </em>
        —— SALE/DISCOUNT
        <b>OFFER</b>
        ——
        {/* add href  */}
        <a href>NEW PRODUCT HIGHLIGHT</a>
      </p>
      <div className="left">
        gallery
      </div>
      <div className="right">
        <div className="star"> Star</div>
        <a href>Read all reviews </a>
        {/* add href */}
        <p>CATEGORY</p>
        <h1>Expanded Product Name</h1>
        <p>price</p>
        {/* style selector */}
        <div>
          <b>
            STYLE
            {'>'}
          </b>
          SELECTED STYLE
        </div>
        <div>thumbnails</div>
        <div>select size and quantity</div>
        <div>add to cart and</div>
      </div>
    </div>
  </div>
);

export default Overview;
