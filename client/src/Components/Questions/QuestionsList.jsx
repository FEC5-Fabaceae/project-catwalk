import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import QuestionItem from './QuestionItem';

const QuestionsList = (props) => {
  const { list } = props;
  const { results } = list;
  const [questions, setQuestions] = useState([]);
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    if (results) {
      setQuestions(results);
    }
  }, [results]);

  const clickButton = () => {
    if (visible < questions.length) {
      setVisible(visible + 2);
    }
  };

  let AddButton;
  if (visible < questions.length) {
    AddButton = <button type="button" onClick={clickButton}>More answered questions</button>;
  }

  return (
    <>
      <ul className="questions-list">
        {questions.filter(
          (question, index) => (index < visible),
        )
          .map(
            (question) => (
              <QuestionItem
                key={question.question_id}
                question={question}
                setQuestions={setQuestions}
              />
            ),
          )}
      </ul>
      <div className="question-list-more-button">{AddButton}</div>
      <div className="questions-add">
        <button type="button">
          Add a Question
        </button>
      </div>
    </>
  );
};

QuestionsList.propTypes = {
  list: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default QuestionsList;
