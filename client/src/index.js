import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import withInteractionsTracker from './Components/InteractionsTracker';

ReactDOM.render(React.createElement(withInteractionsTracker(App)), document.getElementById('app'));
