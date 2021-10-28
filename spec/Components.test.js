import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MyComponent from './MyComponent';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import sum from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('loads items eventually', async () => {
  render(<MyComponent />);

  // Click button
  fireEvent.click(screen.getByText('Load'));

  // Wait for page to update with query text
  const items = await screen.findAllByText(/Item #[0-9]: /);
  expect(items).toHaveLength(10);
});
