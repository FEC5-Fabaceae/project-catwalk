import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import QuestionAndAnswer from '../client/src/Components/Questions/QuestionAndAnswer';
import QuestionItem from '../client/src/Components/Questions/QuestionItem';

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
  });
});
