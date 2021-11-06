import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import QuestionItem from './QuestionItem';
import AddQuestionForm from './AddQuestionForm';
import Modal from './Modal';

const QuestionsList = (props) => {
  const { list } = props;
  const { results } = list;
  const [questions, setQuestions] = useState([]);
  const [visible, setVisible] = useState(4);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (results) {
      setQuestions(results);
    }
  }, [results]);

  const clickAddButton = () => {
    if (visible < questions.length) {
      setVisible(visible + 2);
    }
  };

  let AddButton;
  if (visible < questions.length) {
    AddButton = <button type="button" onClick={clickAddButton}>More answered questions</button>;
  }

  const clickAddQuestionButton = () => {
    setModalVisible(true);
  };

  return (
    <>
      <ul className="scrollable-question-list">
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
        <button type="button" onClick={clickAddQuestionButton}>
          Add a Question
        </button>
        {modalVisible
          ? <Modal component={<AddQuestionForm setQuestions={setQuestions} />} />
          : null}
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
