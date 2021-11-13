/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// import { reduce } from 'core-js/core/array';
import React, { useContext } from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import ProductSelector from './ProductSelector';
import ProviderContext from '../Context/provider/ProviderContext';

const ProductInfoHooks = () => {
  const providerContext = useContext(ProviderContext);

  const stylesArray = providerContext.styles;
  const category = providerContext.text;
  const presentStyle = providerContext.currentStyle;

  const handleClick = (e) => {
    providerContext.getCurrentStyle(e.target.name);
    providerContext.getProduct(e.target.id);
  };

  if (!stylesArray[0]) {
    return <p>Loading</p>;
  }
  return (
    <>
      <div className="left-text">
        <div><h1>{presentStyle.name}</h1></div>
        {presentStyle.sale_price ? (
          <>
            <div style={{ color: 'red', textDecorationLine: 'line-through' }}>{presentStyle.original_price}</div>
            <div>{presentStyle.sale_price}</div>
          </>
        )
          : <div>{presentStyle.original_price}</div>}
        <div className="star-rating-row">
          <b>
            STYLE
            {'>'}
          </b>
          <div>
            &nbsp;
            {category}

          </div>
        </div>
      </div>
      <div className="style-select-icon-container">
        {stylesArray[0].results && stylesArray[0].results.map((photo) => (
          <>
            <img
              src={photo.photos[0].thumbnail_url}
              className="style-icon"
              onClick={handleClick}
              id={stylesArray[0].product_id}
              name={photo.style_id}
              style={{ height: '49px', width: '49px' }}
              alt="clothing"
            />
          </>
        ))}
      </div>
      <ProductSelector />
      <span>
        <a href="https://www.facebook.com">
          <FaFacebook style={{
            margin: '20px', height: '40px', width: '40px', color: '#4267B2',
          }}
          />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagramSquare
            className="instagram"
            style={{
              margin: '20px', height: '40px', width: '40px',
            }}
          />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitterSquare style={{
            margin: '20px', height: '40px', width: '40px', color: '#00acee ',
          }}
          />
        </a>
      </span>

    </>
  );
};

export default ProductInfoHooks;
