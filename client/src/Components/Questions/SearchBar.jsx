import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  const { list, changeList } = props;
  const { product_id, results } = list;
  const [text, setText] = useState('');

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  // if there are 3 or more characters, filter the list to match the characters
  useEffect(() => {
    if (text.length >= 3 && results) {
      const filtered = results.filter((question) => question.question_body.includes(text));
      changeList({ product_id, results: filtered });
    } else {
      changeList(list);
    }
  }, [text]);

  return (
    <>
      <input type="text" className="search-questions" placeholder="Have a question? Search for answers..." value={text} onChange={(e) => { onInputChange(e); }} />
    </>
  );
};

SearchBar.propTypes = {
  list: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  changeList: PropTypes.func.isRequired,
};

export default SearchBar;
