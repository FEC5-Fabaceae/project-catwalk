import React from 'react';
import PropTypes from 'prop-types';
import AnswersList from './AnswersList';

const QuestionItem = (props) => {
  const { question } = props;
  const { question_id, question_body, question_helpfulness, answers } = question;

  return (
    <div className="questions-list-item">
      <section className="questions-list-item-questionbody">
        <span>Q:</span>
        <p>{question_body}</p>
      </section>
      <aside>
        <span>Helpful?</span>
        <button type="button">Yes</button>
        {question_helpfulness}
        <button type="button">Add Answer</button>
      </aside>
      <section>
        <span>A:</span>
        <ul>
          <AnswersList answerlist={answers} questionID={question_id} />
        </ul>
      </section>
    </div>
  );
};

QuestionItem.propTypes = {
  question: PropTypes.shape({
    question_id: PropTypes.number,
    question_body: PropTypes.string.isRequired,
    question_date: PropTypes.string.isRequired,
    asker_name: PropTypes.string.isRequired,
    question_helpfulness: PropTypes.number.isRequired,
    reported: PropTypes.bool,
    answers: PropTypes.objectOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default QuestionItem;
