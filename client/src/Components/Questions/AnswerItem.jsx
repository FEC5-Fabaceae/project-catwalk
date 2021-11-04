import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import axios from 'axios';
import ProductIdContext from '../Context';

const AnswerItem = (props) => {
  const {
    answer,
    setQuestions,
  } = props;
  const {
    id,
    body,
    date,
    answerer_name,
    helpfulness,
    photos,
  } = answer;
  const value = useContext(ProductIdContext);
  const [disableHelpful, setDisableHelpful] = useState(false);
  const [disableReport, setDisableReport] = useState(false);

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
        axios.get(`qa/questions/?product_id=${value}`)
          .then((res) => {
            setQuestions(res.data.results);
          });
      })
      .catch((err) => console.log(err));
  };

  const reportAnswer = () => {
    axios.put(`qa/answers/${id}/report`)
      .catch((err) => console.log(err));
  };

  const handleClick = (e, state) => {
    if (e.target.value === 'Yes') {
      if (!state) {
        setDisableHelpful(true);
        updateCount();
      }
    }
    if (e.target.value === 'Report') {
      if (!state) {
        setDisableReport(true);
        reportAnswer();
      }
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
      <div className="answer-list-item-inline">
        {sellerName}
        <span>{moment(date).format('MMMM D, YYYY')}</span>
        <span>Helpful?</span>
        <button type="button" onClick={(e) => { handleClick(e, disableHelpful); }} value="Yes">Yes</button>
        (
        {helpfulness}
        )
        <button type="button" onClick={(e) => { handleClick(e, disableReport); }} value="Report">Report</button>
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
