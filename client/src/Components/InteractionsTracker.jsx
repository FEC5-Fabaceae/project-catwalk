import React, { useState, useEffect } from 'react';

const withInteractionsTracker = (Component) => class extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseClick = this.handleMouseClick.bind(this);
  }

  handleMouseClick(event) {
    event.preventDefault();
    console.log(event);
  }

  render() {
    return (
      <Component onClick={this.handleMouseClick} />
    );
  }
};

export default withInteractionsTracker;
