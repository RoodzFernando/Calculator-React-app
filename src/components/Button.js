import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name }) {
  return (
    <button type="submit">{name}</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
