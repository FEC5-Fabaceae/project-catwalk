/* eslint-disable no-nested-ternary */
import React, { useState, useContext } from 'react';
import ProviderContext from '../Context/provider/ProviderContext';
// import Cart from './Cart';

const ProductSelector = () => {
  const productContext = useContext(ProviderContext);

  const { currentStyle } = productContext;
  const [quantitySize, setQuantitySize] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [sku, setSku] = useState(null);

  const handleChange = (e) => {
    const incomingSku = e.target[e.target.selectedIndex].dataset.id;

    if (quantitySize === null) {
      const dropdown = document.getElementsByClassName('product-dropdown')[0];
      dropdown.setAttribute('size', 0);
    }
    setQuantity(1);
    setQuantitySize(Number(e.target.value));
    setSku(incomingSku);
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkSelected = document.getElementById('select-size');
    if (checkSelected.options[checkSelected.selectedIndex].text === 'SELECT SIZE') {
      alert('please select size'); // replace with modal
    }
    if (!quantitySize) {
      const dropdown = document.getElementsByClassName('product-dropdown')[0];
      dropdown.setAttribute('size', Object.values(currentStyle.skus).length - 1);
    }
    productContext.addCartItems(sku, quantity);
  };

  // eslint-disable-next-line no-return-assign
  return (
    <>
      <div className="product-dropdown-container">
        <select onChange={handleChange} id="select-size" value={quantitySize} className="product-dropdown">
          <option value="" className="product-dropdown-option" selected>SELECT SIZE</option>
          {currentStyle.skus && Object.entries(currentStyle.skus).map((skuId) => (
            <option
              data-id={skuId[0]}
              key={skuId[0]}
              value={skuId[1].quantity}
            >
              {skuId[1].size}
            </option>
          ))}
        </select>
        <select onChange={handleQuantityChange} value={quantity} className="product-dropdown">
          {/* <option value="" selected disabled hidden> - </option> */}
          {quantitySize === null
            ? <option selected> - </option>
            : quantitySize === 0
              ? <option>OUT OF STOCK</option> : [...Array(quantitySize)].map((num, i) => {
                if (i + 1 > 15) {
                  return;
                } if (i === 1) {
                  return <option selected value={i + 1}>{i + 1}</option>;
                }
                return (<option value={i + 1}>{i + 1}</option>);
              })}
        </select>
      </div>
      <div className="cart-button-container">
        <button className="cart-button" type="submit" onClick={handleSubmit}>Add to Cart</button>
      </div>
    </>

  );
};

export default ProductSelector;
