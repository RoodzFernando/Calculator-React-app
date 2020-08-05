import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ color, wide, name }) {
  return (
    <button type="submit" style={{ backgroundColor: color, width: wide ? '50%' : '25%' }}>{name}</button>
  );
}
Button.defaultProps = {
  color: '#F5913E',
  wide: false,
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};
