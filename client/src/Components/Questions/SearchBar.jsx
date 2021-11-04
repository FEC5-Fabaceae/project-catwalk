import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  const { list, changelist } = props;

  return (
    <>
      <input type="text" placeholder="Have a question? Search for answers..." />
      <button type="button">Search</button>
    </>
  );
};

SearchBar.propTypes = {
  list: PropTypes.shape({
    question_id: PropTypes.number,
    question_body: PropTypes.string.isRequired,
    question_date: PropTypes.string.isRequired,
    asker_name: PropTypes.string.isRequired,
    question_helpfulness: PropTypes.number.isRequired,
    reported: PropTypes.bool,
    answers: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
};

export default SearchBar;