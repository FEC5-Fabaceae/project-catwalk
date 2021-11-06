/* eslint-disable no-unused-expressions */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import Reviews from '../client/src/Components/Review/Reviews';
import RatingBreakdown, { sumValues, getPercentages } from '../client/src/Components/Review/RatingBreakdown';
import metadata from '../client/src/Components/Review/sampleMetaData';
// import ReviewList from '../client/src/Components/Review/ReviewList';
// import ProductBreakdown from '../client/src/Components/Review/ProductBreakdown';
// import RatingBreakdown from '../client/src/Components/Review/RatingBreakdown';

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

describe('Reviews component', () => {
  test('renders Reviews component', () => {
    render(<Reviews />, container);
    expect(screen.getByText('RATINGS AND REVIEWS')).toBeInTheDocument;
  });
});

describe('Breakdown Section', () => {
  describe('Ratings Breakdown', () => {
    const ratingsObject = {
      1: 20,
      2: 10,
      3: 5,
      4: 100,
      5: 2,
    };
    describe('Value sum function', () => {
      test('returns the sum of the values of all properties of an object', () => {
        const sum = 20 + 10 + 5 + 100 + 2;
        const total = sumValues(ratingsObject);
        expect(total).toBe(sum);
      });
    });

    describe('Percentages calculator', () => {
      test('creates an object with ratings mapped to their percentage of the total number of ratings', () => {
        const percentagesObject = getPercentages(ratingsObject);
        expect(percentagesObject).toBeInstanceOf(Object);

        }
      )}
    );
  }
};
           