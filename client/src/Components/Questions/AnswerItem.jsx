import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import axios from 'axios';

const AnswerItem = (props) => {
  const { answer, questionID, setAnswer } = props;
  const { id, body, date, answerer_name, helpfulness, photos } = answer;

  let pictures;
  if (photos.length) {
    pictures = photos.map((photo, i) => (
      <img src={photo} alt="" key={i} />
    ));
  }

  const sellerNameStyle = {
    fontWeight: 'bold',
  };

  let sellerName;
  if (answerer_name === 'Seller') {
    sellerName = <span style={sellerNameStyle}>{answerer_name}</span>;
  } else {
    sellerName = <span>{answerer_name}</span>;
  }

  const updateCount = () => {
    axios.put(`qa/answers/${id}/helpful`)
      .then(() => {
        axios.get(`qa/questions/${questionID}/answers`)
          .then((res) => {
            setAnswer(res.data.results);
          });
      })
      .catch((err) => console.log(err));
  };

  const handleClick = (e) => {
    if (e.target.value === 'Yes') {
      updateCount();
    }
  };

  return (
    <div className="answer-list-item">
      <p className="answer-list-item-bodytext">
        {body}
      </p>
      <div className="answer-list-item-photos">
        {pictures}
      </div>
      <div className="feed-list-item-inline">
        {sellerName}
        <span>{moment(date).format('MMMM D, YYYY')}</span>
        <span>Helpful?</span>
        <button type="button" onClick={(e) => { handleClick(e); }} value="Yes">Yes</button>
        (
        {helpfulness}
        )
        <button type="button" value="Report">Report</button>
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
