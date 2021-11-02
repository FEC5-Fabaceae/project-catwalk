import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';

import QuestionAndAnswer from '../client/src/Components/Questions/QuestionAndAnswer';

let container = null;
beforeEach(() => {
  // set up a DOM element as a rendering target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // clean up after finishing
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('QuestionAndAnswer component', () => {
  test('render Questions and Answers component', () => {
    render(<QuestionAndAnswer />, container);
    expect(screen.getByText('Questions and Answers')).toBeInTheDocument();
  });
});
