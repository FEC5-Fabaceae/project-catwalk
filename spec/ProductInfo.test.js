/* eslint-disable no-unused-expressions */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';
// import { toBeInTheDocument } from '@testing-library/jest-dom'
import ProductInfo from '../client/src/Components/Overview/ProductInfo';

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

describe('ProductInfo component', () => {
  test('renders ProductInfo component', () => {
    render(<ProductInfo />, container);
    expect(screen.getByText('☆☆☆☆☆')).toBeInTheDocument;
  });
});
