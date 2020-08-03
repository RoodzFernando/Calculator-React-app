import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
    return ( 
      <button style={{backgroundColor: props.color, width: props.wide ? "50%" : "25%"}}>{props.name}</button>
    );
}
Button.defaultProps = {
  color: "#F5913E"
}
Button.propTypes = {
  name: PropTypes.string
}