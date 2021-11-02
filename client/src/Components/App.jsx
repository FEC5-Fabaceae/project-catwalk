import React from 'react';
import Overview from './Overview/Overview';
import Reviews from './Review/Reviews';
import QuestionAndAnswer from './Questions/QuestionAndAnswer';

// please add your components here in the order they appear

const App = (props) => (
  <>
    <div><Overview /></div>
    <div><QuestionAndAnswer /></div>
    <div><Reviews /></div>
  </>
);

export default App;
