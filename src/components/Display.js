import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="result">{this.props.result}</div>
    );
  }
}
Display.defaultProps = {
  result: 0
}
Display.propTypes = {
  result: PropTypes.string
}