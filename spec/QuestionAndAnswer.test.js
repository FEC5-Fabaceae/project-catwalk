import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import QuestionAndAnswer from '../client/src/Components/Questions/QuestionAndAnswer';
import QuestionItem from '../client/src/Components/Questions/QuestionItem';
import AddQuestionForm from '../client/src/Components/Questions/AddQuestionForm';
import AddAnswerForm from '../client/src/Components/Questions/AddAnswerForm';
import AddPhotos from '../client/src/Components/Questions/AddPhotos';
import Modal from '../client/src/Components/Questions/Modal';
import sampleData from '../client/src/Components/Questions/sampleData';
import ProductIdContext from '../client/src/Components/Context';
import ProviderState from '../client/src/Components/Context/provider/ProviderState';

describe('renders Q&A component and its forms', () => {
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

  test('renders Questions and Answers component', () => {
    render(<QuestionAndAnswer />, container);
    expect(screen.getByText('Questions and Answers')).toBeInTheDocument();
  });

  test('renders QuestionItem component', () => {
    render(
      <ProductIdContext.Provider value="40344">
        <ProviderState>
          <QuestionItem question={sampleData.results[0]} setQuestion={() => { }} />
        </ProviderState>
      </ProductIdContext.Provider>, container,
    );
    expect(screen.getByText('Q:')).toBeInTheDocument();
  });

  test('renders Question Form', () => {
    render(
      <ProductIdContext.Provider value="40344">
        <ProviderState>
          <AddQuestionForm />
        </ProviderState>
      </ProductIdContext.Provider>, container,
    );
    expect(screen.getByText('Ask Your Question')).toBeInTheDocument();
  });

  test('renders Answer Form', () => {
    render(
      <ProductIdContext.Provider value="40344">
        <ProviderState>
          <AddAnswerForm />
        </ProviderState>
      </ProductIdContext.Provider>, container,
    );
    expect(screen.getByText('Submit Your Answer')).toBeInTheDocument();
  });

  test('renders AddPhotos component', () => {
    render(<AddPhotos imageState={[]} setImages={() => { }} />, container);
    expect(screen.getByText('Add Photos')).toBeInTheDocument();
  });

  test('renders modal component', () => {
    render(
      <ProductIdContext.Provider value="40344">
        <ProviderState>
          <Modal
            setModalVisible
            component={(
              <AddAnswerForm />)}
          />
        </ProviderState>
      </ProductIdContext.Provider>, container,
    );
    expect(screen.getByText('Submit Your Answer')).toBeInTheDocument();
  });
});

{/* xdescribe('handles API calls', () => {
  const server = setupServer(
    rest.get('/qa/questions',
      (req, res, ctx) => res(ctx.json({ }))),
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('send get reque')
}); */}