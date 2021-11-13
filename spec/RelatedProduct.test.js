import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';
import RelatedProduct from '../client/src/Components/Related Products/RelatedProduct';

let container = null;
let value = {productID: '40344', setProductID: function(){}}

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Related Products List component', () => {
  test('RelatedProductsList renders', () => {
    render(<RelatedProduct value={value} product={'40345'} />, container);
    expect(screen.getByText('$')).toBeInTheDocument;
  });
});