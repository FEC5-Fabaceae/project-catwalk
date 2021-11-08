import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ProductIdContext from '../Context';
import AnswersList from './AnswersList';
import AddAnswerForm from './AddAnswerForm';
import Modal from './Modal';

const QuestionItem = (props) => {
  const { question, setQuestions } = props;
  const { question_id, question_body, question_helpfulness, answers } = question;
  const value = useContext(ProductIdContext);
  const [disableHelpful, setDisableHelpful] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const updateCount = () => {
    axios.put(`qa/questions/${question_id}/helpful`)
      .then(() => {
        axios.get(`qa/questions/?product_id=${value}`)
          .then((res) => {
            setQuestions(res.data.results);
          });
      })
      .catch((err) => console.log(err));
  };

  const handleClick = (e, state) => {
    if (e.target.value === 'Yes') {
      if (!state) {
        setDisableHelpful(true);
        updateCount();
      }
    }
  };

  const clickAddAnswerButton = () => {
    setModalVisible(true);
  };

  return (
    <div className="questions-list-item">
      <section className="questions-list-item-questionbody">
        <span className="question-responses">Q:</span>
        <p className="questionbody">{question_body}</p>
      </section>
      <aside className="question-interaction">
        <span>Helpful?</span>
        <button type="button" onClick={(e) => { handleClick(e, disableHelpful); }} value="Yes">Yes</button>
        (
        {question_helpfulness}
        )
        <button type="button" onClick={clickAddAnswerButton}>
          Add Answer
        </button>
        {modalVisible
          ? (
            <Modal
              setModalVisible={setModalVisible}
              component={(
                <AddAnswerForm
                  questionID={question_id}
                  questionBody={question_body}
                  setQuestions={setQuestions}
                />
              )}
            />
          )
          : <></>}
      </aside>
      <section className="questions-list-item-answer">
        <span className="question-responses">A:</span>
        <AnswersList
          answerlist={answers}
          setQuestions={setQuestions}
        />
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
    answers: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
};

export default QuestionItem;
