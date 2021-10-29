import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import Reviews from '../client/src/Components/Review/Reviews';
// import ReviewList from '../client/src/Components/Review/ReviewList';
// import ProductBreakdown from '../client/src/Components/Review/ProductBreakdown';
// import RatingBreakdown from '../client/src/Components/Review/RatingBreakdown';

let container = null;
beforeEach(() => {
  // set up a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Reviews component', () => {
  test('renders Reviews component', () => {
    render(<Reviews />, container);
  });
});
