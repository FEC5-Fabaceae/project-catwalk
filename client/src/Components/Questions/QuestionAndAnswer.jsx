import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionsList from './QuestionsList';

const QuestionAndAnswer = () => {
  const [questionsState, setQuestionsState] = useState({});

  const retrieveQuestions = () => {
    // for now, change ${product_id} to 40350
    axios.get('/qa/questions/?product_id=40350')
      .then((res) => {
        setQuestionsState(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    retrieveQuestions();
  }, []);

  return (
    <section className="questions-answers-section">
      <h2>Questions and Answers</h2>
      <div className="questions-search" />
      <div className="questions-main">
        <QuestionsList list={questionsState} />
      </div>
      <div className="questions-more" />
      <div className="questions-add" />
    </section>
  );
};

export default QuestionAndAnswer;
