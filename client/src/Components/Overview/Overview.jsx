import React, { useContext } from 'react';
import Gallery from './Gallery';
import ProductInfo from './ProductInfo';
import GalleryHooks from './GalleryHooks';
import ProductInfoHooks from './ProductInfoHooks';

// import ProviderIdContext from '../Context.jsx';
import ProviderContext from '../Context/provider/ProviderContext';

const Overview = () => {
  // const []
  // const providerIdContext = useContext(ProviderIdContext);
  ;
  return (
    <div>
      <div>
        <p style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <em>SITE-WIDE ANNOUNCEMENT MESSAGE! </em>
          — SALE/DISCOUNT
          <b> OFFER</b>
          —
          <a href>NEW PRODUCT HIGHLIGHT</a>
        </p>
      </div>
      <div className="product-overview-container">
        <div className="product-overview-container-left">
          <div className=".gallery-wrapper">
            {/* <Gallery /> */}
            <GalleryHooks />
          </div>
        </div>
        <div className="spacer" />
        <div className="product-overview-container-right">
          {/* <ProductInfo /> */}
          <ProductInfoHooks />
        </div>
        <div className="product-overview-container" />
      </div>
    </div>
  );
};

export default Overview;
