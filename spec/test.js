const sum = require('./sum').sum;
import MyComponent from './MyComponent';
import {render, fireEvent, screen} from '@testing-library/react';
import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('loads items eventually', async () => {
  render(<MyComponent />)

  // Click button
  fireEvent.click(screen.getByText('Load'))

  // Wait for page to update with query text
  const items = await screen.findAllByText(/Item #[0-9]: /)
  expect(items).toHaveLength(10)
})