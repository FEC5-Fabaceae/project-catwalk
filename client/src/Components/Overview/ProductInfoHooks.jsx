/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import ProviderContext from '../Context/provider/ProviderContext';

const ProductInfoHooks = () => {
  const providerContext = useContext(ProviderContext);

  const stylesArray = providerContext.styles;
  const category = providerContext.text;
  const presentStyle = providerContext.currentStyle;

  if (stylesArray[0]) {
    console.log(stylesArray[0].results);
  }

  const handleClick = (e) => {
    console.log(e.target.id);
    providerContext.getCurrentStyle(e.target.name);
    providerContext.getProduct(e.target.id);
  };

  if (!stylesArray[0]) {
    return <p>Loading</p>;
  }
  return (
    <>
      <div><h1>{presentStyle.name}</h1></div>
      <div className="star-rating-row">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <b>
            STYLE
          </b>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
          <b>
            {'>'}
          </b>
        </div>
        <div>{category}</div>
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
      <div style={{ padding: '10px' }}>
        <select className="select-style-drop-list">

          {presentStyle.skus && Object.keys(presentStyle.skus).map((sku) => (
            <option
              id={presentStyle.skus[sku].quantity}
              value={presentStyle.skus[sku].quantity}
            >
              {presentStyle.skus[sku].size}

            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ProductInfoHooks;