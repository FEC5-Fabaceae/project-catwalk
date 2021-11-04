import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import QuestionsList from './QuestionsList';
import ProductIdContext from '../Context';

const QuestionAndAnswer = () => {
  const value = useContext(ProductIdContext);
  const [questionsState, setQuestionsState] = useState({});

  const retrieveQuestions = () => {
    axios.get(`/qa/questions/?product_id=${value}`)
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
    </section>
  );
};

export default QuestionAndAnswer;
