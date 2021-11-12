/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React, { useContext, useReducer, useEffect } from 'react';

import axios from 'axios';
import ProviderReducer from './ProviderReducer';
import ProviderContext from './ProviderContext';
import ProductIdContext from '../../Context';

import {
  GET_PRODUCT,
  GET_PRODUCT_STYLES,
  GET_CURRENT_STYLE,
  GET_CART_ITEMS,
  ADD_CART_ITEMS,
} from '../types';

const ProviderState = (props) => {
  const context = useContext(ProductIdContext);
  let { productID } = context;

  const initialState = {
    product: {},
    styles: [],
    currentStyle: {},
    text: [],
    cart: [],
    cartDetails: [],
  };

  const [state, dispatch] = useReducer(ProviderReducer, initialState);

  useEffect(() => {
    console.log(productID);
    getProduct(productID);
    getProductStyles(productID);
  }, []);
  useEffect(() => {
    productID = context.productID;
    getProduct(productID);
    getProductStyles(productID);
  }, [context]);

  const getProduct = (id) => {
    axios.get(`/products/${id}`).then((res) => {
      dispatch({
        type: GET_PRODUCT,
        payload: res.data,
      });
    });
  };

  const getProductStyles = (id) => {
    axios.get(`/products/${id}/styles`).then((res) => {
      dispatch({
        type: GET_PRODUCT_STYLES,
        payload: res.data,
      });
    });
  };

  const getCurrentStyle = (id) => {
    const currentStyle = state.styles[0].results.find(
      // eslint-disable-next-line radix
      (style) => style.style_id === parseInt(id),
    );

    dispatch({
      type: GET_CURRENT_STYLE,
      payload: currentStyle,
    });
  };

  const getCartItems = () => {
    const res = axios.get('/cart');
    dispatch({
      type: GET_CART_ITEMS,
      payload: res.data,
    });
  };
  const addCartItems = (sku, quantity) => {
    const cartInfo = {
      sku_id: sku,
      quantity,
    };
    const res = axios.post('/cart', { sku_id: sku });

    const itemExists = state.cart.filter((item) => item.sku === sku);

    if (itemExists.length > 0) {
      return;
    }
    dispatch({
      type: ADD_CART_ITEMS,
      payload: cartInfo,
    });
  };
  const { children } = props;
  return (
    <ProviderContext.Provider
      value={{
        product: state.product,
        styles: state.styles,
        currentStyle: state.currentStyle,
        text: state.text,
        getProduct,

        getProductStyles,
        getCurrentStyle,
        getCartItems,
        addCartItems,
      }}
    >
      {children}
    </ProviderContext.Provider>
  );
};

export default ProviderState;
