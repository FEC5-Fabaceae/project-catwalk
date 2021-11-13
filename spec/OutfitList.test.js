import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';
import OutfitList from '../client/src/Components/Related Products/OutfitList';

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

describe('Outfit List component', () => {
  test('renders Outfit List component', () => {
    render(<OutfitList />, container);
    expect(screen.getByText('Your Outfit')).toBeInTheDocument;
  });
});
