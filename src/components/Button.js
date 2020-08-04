import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  return (
    <button type="submit">{props.name}</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
