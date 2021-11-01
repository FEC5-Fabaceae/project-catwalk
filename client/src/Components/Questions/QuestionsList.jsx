import React from 'react';
import PropTypes from 'prop-types';
import QuestionItem from './QuestionItem';

const QuestionsList = (props) => {
  const { list } = props;
  const { results } = list;
  return (
    <ul className="questions-list">
      {results.map(
        (question) => (<QuestionItem key={question.question_id} question={question} />),
      )}
    </ul>
  );
};

QuestionsList.propTypes = {
  list: PropTypes.shape({
    product_id: PropTypes.number,
    results: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default QuestionsList;
