import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import QuestionsList from './QuestionsList';
import ProductIdContext from '../Context';

const QuestionAndAnswer = () => {
  const value = useContext(ProductIdContext);
  const [questionsState, setQuestionsState] = useState({});
  const [changedState, setChangedState] = useState(questionsState);

  const retrieveQuestions = () => {
    // to get better data for now, switch back to ${value}
    axios.get(`/qa/questions/?product_id=${value}&count=100`)
      .then((res) => {
        setQuestionsState(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    retrieveQuestions();
  }, []);

  useEffect(() => {
    setChangedState(questionsState);
  }, [questionsState]);

  return (
    <section className="questions-answers-section">
      <h2>Questions and Answers</h2>
      <div className="questions-search">
        <SearchBar list={questionsState} changeList={setChangedState} />
      </div>
      <div className="questions-main">
        <QuestionsList list={changedState} />
      </div>
    </section>
  );
};

export default QuestionAndAnswer;
