import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AnswerItem from './AnswerItem';

const AnswersList = (props) => {
  const { answerlist, productID, setQuestions } = props;
  const answers = Object.values(answerlist);

  return (
    <div>
      <ul>
        {answers.map(
          (answer) => (
            <AnswerItem
              key={answer.id}
              answer={answer}
              productID={productID}
              setQuestions={setQuestions}
            />
          ),
        )}
      </ul>
    </div>
  );
};

AnswersList.propTypes = {
  answerlist: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AnswersList;
