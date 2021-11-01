import React from 'react';
import QuestionsList from './QuestionsList';
import sampleData from './sampleData';

const QuestionAndAnswer = () => (
  <section className="questions-answers-section">
    <h2>Questions and Answers</h2>
    <div className="questions-search" />
    <div className="questions-main">
      <QuestionsList list={sampleData} />
    </div>
    <div className="questions-more" />
    <div className="questions-add" />
  </section>
);

export default QuestionAndAnswer;
