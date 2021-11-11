import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';
import RelatedProductsList from '../client/src/Components/Related Products/RelatedProductsList';

let container = null;

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
    render(<RelatedProductsList />, container);
    expect(screen.getByText('Related Products')).toBeInTheDocument;
  });
});
