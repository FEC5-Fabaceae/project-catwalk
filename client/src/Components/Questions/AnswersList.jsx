import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AnswerItem from './AnswerItem';

const AnswersList = (props) => {
  const { answerlist, setQuestions } = props;
  const answers = Object.values(answerlist);
  const [visible, setVisible] = useState(2);

  answers.sort((a, b) => b.helpfulness - a.helpfulness);

  const clickButtonMore = () => {
    setVisible(answers.length);
  };

  const clickButtonCollapse = () => {
    setVisible(2);
  };

  let AddCollapseButton;
  if (answers.length > 2 && answers.length !== visible) {
    AddCollapseButton = <button className="question-button" type="button" onClick={clickButtonMore}>See more answers</button>;
  }
  if (answers.length === visible && answers.length !== 2) {
    AddCollapseButton = <button className="question-button" type="button" onClick={clickButtonCollapse}>Collapse answers</button>;
  }

  return (
    <>
      <div>
        <ul className="answer-list-container">
          {answers.filter((answer, index) => (index < visible))
            .map((answer) => (
              <AnswerItem
                key={answer.id}
                answer={answer}
                setQuestions={setQuestions}
              />
            ))}
        </ul>
      </div>
      <div className="answer-list-button">{AddCollapseButton}</div>
    </>
  );
};

AnswersList.propTypes = {
  answerlist: PropTypes.objectOf(PropTypes.object).isRequired,
  setQuestions: PropTypes.func.isRequired,
};

export default AnswersList;
