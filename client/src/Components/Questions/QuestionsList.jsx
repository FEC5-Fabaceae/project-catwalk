import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import QuestionItem from './QuestionItem';

const QuestionsList = (props) => {
  const { list } = props;
  const { product_id, results } = list;
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (results) {
      setQuestions(results);
    }
  }, [results]);

  return (
    <ul className="questions-list">
      {questions.map(
        (question) => (
          <QuestionItem
            key={question.question_id}
            question={question}
            productID={product_id}
            setQuestions={setQuestions}
          />
        ),
      )}
    </ul>
  );
};

QuestionsList.propTypes = {
  list: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default QuestionsList;
