import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Outfit from '../client/src/Components/Related Products/Outfit';

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

describe('Outfit component', () => {
  test('Outfit renders', () => {
    render(<Outfit product="40345" />, container);
    expect(screen.getByText('$')).toBeInTheDocument;
  });
});
