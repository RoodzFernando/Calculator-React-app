import React from 'react';
import PropTypes from 'prop-types';

export default function Display(props) {
  return (
    <div className="result">{props.result}</div>
  );
}

Display.defaultProps = {
  result: '0',
};
Display.propTypes = {
  result: PropTypes.string,
};
