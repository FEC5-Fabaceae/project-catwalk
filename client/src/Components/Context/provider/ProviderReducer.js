import {
  GET_PRODUCT,
  GET_PRODUCT_STYLES,
  GET_CURRENT_STYLE,
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
        currentStyle: action.payload.results.find((product) => product['default?'] === 'true'),

      };
    case GET_CURRENT_STYLE:
      return {
        ...state,
        currentStyle: action.payload,
      };
    default:
      return state;
  }
};
