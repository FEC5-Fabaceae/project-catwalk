import React, {useState} from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  const { list, changelist } = props;
  const [text, setText] = useState('');

  // if there are 3 or more characters, filter the list to match the characters
  // if ()

  // onChange event handler that recognizes the input text
  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input type="text" placeholder="Have a question? Search for answers..." value={text} onChange={(e) => { onInputChange(e); }} />
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