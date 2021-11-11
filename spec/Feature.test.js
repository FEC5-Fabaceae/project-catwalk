import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';
import Feature from '../client/src/Components/Related Products/Feature';

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

describe('Feature component', () => {
  test('Feature renders', () => {
    render(<Feature currentProductValue={'test'} feature={'test'} relatedProductValue={'test'} />, container);
    expect(screen.getByText('test')).toBeInTheDocument;
  });
  test('Feature renders', () => {
    render(<Feature currentProductValue={null} feature={'test'} relatedProductValue={null} />, container);
    expect(screen.getByText('test')).toBeInTheDocument;
  });
});
