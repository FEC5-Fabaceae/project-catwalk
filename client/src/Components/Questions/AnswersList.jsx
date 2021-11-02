import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AnswerItem from './AnswerItem';

const AnswersList = (props) => {
  const { answerlist, questionID } = props;
  const [answerListState, setAnswerList] = useState({});
  const answers = Object.values(answerListState);

  useEffect(() => {
    if (answerlist) {
      setAnswerList(answerlist);
    }
  }, [answerlist]);

  return (
    <div>
      <ul>
        {answers.map(
          (answer) => (
            <AnswerItem
              key={answer.id}
              answer={answer}
              questionID={questionID}
              setAnswer={setAnswerList}
            />
          ),
        )}
      </ul>
    </div>
  );
};

AnswersList.propTypes = {
  answerlist: PropTypes.objectOf(PropTypes.object).isRequired,
  questionID: PropTypes.number.isRequired,
};

export default AnswersList;
