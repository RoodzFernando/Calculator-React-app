import React from 'react';
import PropTypes from 'prop-types';
// const PropTypes = require('prop-types');

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultResult: 0
    }
  }
  render() {
    return (
        <div className="result">{this.state.defaultResult}</div>
    );
  }
}

Display.propTypes = {
  result: PropTypes.string
}