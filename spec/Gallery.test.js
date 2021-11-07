/* eslint-disable no-unused-expressions */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';
// import { toBeInTheDocument } from '@testing-library/jest-dom'
import Gallery from '../client/src/Components/Overview/Gallery';

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

describe('Gallery component', () => {
  test('renders Gallery component', () => {
    render(<Gallery />, container);
    expect(screen.getByText('gallery')).toBeInTheDocument;
  });
});
