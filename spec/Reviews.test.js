/* eslint-disable no-unused-expressions */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Reviews from '../client/src/Components/Review/Reviews';
import RatingBreakdown, { sumValues, getPercentages } from '../client/src/Components/Review/RatingBreakdown';
import metadata from '../client/src/Components/Review/sampleMetaData';
import sampleData from '../client/src/Components/Review/sampleData';

let container = null;
const server = setupServer(
  rest.get('/reviews', (req, res, ctx) => (
    res(ctx.json(sampleData))
  )),
);

beforeAll(() => server.listen());

beforeEach(() => {
  // set up a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  server.resetHandlers();
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

afterAll(() => server.close());

describe('Reviews component', () => {
  test('renders Reviews component', () => {
    render(<Reviews />, container);
    expect(screen.getByText('RATINGS AND REVIEWS')).toBeInTheDocument;
  });
  // test('calls the Reviews API', () => {
  //   render(<Reviews />, container);
  //   await waitFor(() => )
  // });
});
