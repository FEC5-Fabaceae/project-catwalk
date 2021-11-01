import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom'
import Overview from '../client/src/Components/Overview/Overview';

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

describe('Overview component', () => {
  test('renders Overview component', () => {
    render(<Overview />, container);
    expect(screen.getByText('Component has rendered')).toBeInTheDocument;
  });
});
