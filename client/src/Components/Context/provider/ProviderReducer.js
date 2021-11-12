// import { act } from 'react-test-renderer';
import {
  GET_PRODUCT,
  GET_PRODUCT_STYLES,
  GET_CURRENT_STYLE,
  GET_CART_ITEMS,
  ADD_CART_ITEMS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state, // copy of the initial state
        product: action.payload, // value that you want to update within the initial state
        text: action.payload.category,
      };
    case GET_PRODUCT_STYLES:
      return {
        ...state,
        styles: [...state.styles, action.payload],
        currentStyle: action.payload.results.find((product) => product['default?'] === true),

      };
    case GET_CURRENT_STYLE:
      return {
        ...state,
        currentStyle: action.payload,
      };
    case GET_CART_ITEMS:
      return {
        ...state,
        cart: action.payload,
      };
    case ADD_CART_ITEMS:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
