import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const AnswerItem = (props) => {
  const { answer } = props;
  const { body, date, answerer_name, helpfulness, photos } = answer;
  return (
    <div className="answer-list-item">
      <p className="answer-list-item-bodytext">
        {body}
      </p>
      <div className="answer-list-item-photos">
        {photos}
      </div>
      <div className="feed-list-item-inline">
        <span>{answerer_name}</span>
        <span>{moment(date).format('MMMM D, YYYY')}</span>
        <span>Helpful?</span>
        <button type="button">Yes</button>
        {helpfulness}
        <button type="button">Report</button>
      </div>
    </div>
  );
};

AnswerItem.propTypes = {
  answer: PropTypes.shape({
    id: PropTypes.number,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    answerer_name: PropTypes.string.isRequired,
    helpfulness: PropTypes.number.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default AnswerItem;
