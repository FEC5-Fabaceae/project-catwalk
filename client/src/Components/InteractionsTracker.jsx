import React from 'react';

const axios = require('axios');

const withInteractionsTracker = (Component) => class extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseClick = this.handleMouseClick.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handleMouseClick(e) {
    const element = e.target.outerHTML;
    const widget = Component.name;
    const time = new Date();
    axios({
      url: 'http://localhost:3000/interactions',
      method: 'post',
      data: {
        element,
        widget,
        time,
      },
    });
  }

  render() {
    return (
      <div onClick={this.handleMouseClick}>
        <Component />
      </div>
    );
  }
};

export default withInteractionsTracker;
