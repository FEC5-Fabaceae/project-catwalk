import React, { useReducer, useEffect } from 'react';

import ProviderReducer from './ProviderReducer';
import ProviderContext from './ProviderContext';

import axios from 'axios';

import {
  GET_PRODUCT,
  GET_PRODUCT_STYLES,
  GET_CURRENT_STYLE,
} from '../types';

const ProviderState = (props) => {
  const initialState = {
    product: {},
    styles: [],
    currentStyle: {},
    text: [],
  };

  const [state, dispatch] = useReducer(ProviderReducer, initialState);

  useEffect(() => {
    getProduct('40348');
    getProductStyles('40348');

  }, []);

  const getProduct = (id) => {
     axios.get(`/products/${id}`).then((res) => {
      dispatch({
        type: GET_PRODUCT,
        payload: res.data
      })
    });

  }

  const getProductStyles =  (id) => {
    axios.get(`/products/${id}/styles`).then((res) => {
      dispatch({
        type: GET_PRODUCT_STYLES,
        payload: res.data
      })
    });
  }

  const getCurrentStyle = (id) => {
    const currentStyle = state.styles[0].results.find((style) => style.style_id == id);

    dispatch({
      type: GET_CURRENT_STYLE,
      payload: currentStyle
    })
  }

  return (
    <ProviderContext.Provider value={{
      product: state.product,
      styles: state.styles,
      currentStyle: state.currentStyle,
      text: state.text,
      getProduct,
      getProductStyles,
      getCurrentStyle
      }}>
      {props.children}
    </ProviderContext.Provider>
  )
}

export default ProviderState;