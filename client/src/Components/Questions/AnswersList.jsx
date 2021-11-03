import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AnswerItem from './AnswerItem';

const AnswersList = (props) => {
  const { answerlist, productID, setQuestions } = props;
  const answers = Object.values(answerlist);
  const [visible, setVisible] = useState(2);

  const clickButton = (e) => {
    if (e.target.value === 'more') {
      setVisible(answers.length);
    }
    if (e.target.value === 'collapse') {
      setVisible(2);
    }
  };

  let AddCollapseButton;
  if (answers.length > 2 && answers.length !== visible.length) {
    AddCollapseButton = <button type="button" value="more" onClick={(e) => { clickButton(e); }}>See more answers</button>;
  }
  if (answers.length === visible.length && answers.length !== 2) {
    AddCollapseButton = <button type="button" value="collapse" onClick={(e) => { clickButton(e); }}>Collapse answers</button>;
  }

  return (
    <div>
      <ul className="answer-list">
        {answers.filter(
          (answer, index) => (index < visible),
        )
          .map(
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
      <div className="answer-list-button">{AddCollapseButton}</div>
    </div>
  );
};

AnswersList.propTypes = {
  answerlist: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AnswersList;
