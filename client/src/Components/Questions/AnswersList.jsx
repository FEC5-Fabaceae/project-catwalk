import React from 'react';
import PropTypes from 'prop-types';
import AnswerItem from './AnswerItem';

const AnswersList = (props) => {
  const { answerlist } = props;
  const answers = Object.values(answerlist);
  return (
    <div>
      <ul>
        {answers.map(
          (answer) => (
            <AnswerItem key={answer.id} answer={answer} />),
        )}
      </ul>
    </div>
  );
};

AnswersList.propTypes = {
  answerlist: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AnswersList;
