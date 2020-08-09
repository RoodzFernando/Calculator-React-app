/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel({ clickHandler }) {
  return (
    <div className="button-panel">
      <div className="group-1">
        <Button onClick={clickHandler} color="#E0E0E0" name="AC" />
        <Button onClick={clickHandler} color="#E0E0E0" name="+/-" />
        <Button onClick={clickHandler} color="#E0E0E0" name="%" />
        <Button onClick={clickHandler} name="÷" />
      </div>
      <div className="group-2">
        <Button onClick={clickHandler} color="#E0E0E0" name="7" />
        <Button onClick={clickHandler} color="#E0E0E0" name="8" />
        <Button onClick={clickHandler} color="#E0E0E0" name="9" />
        <Button onClick={clickHandler} name="x" />
      </div>
      <div className="group-3">
        <Button onClick={clickHandler} color="#E0E0E0" name="4" />
        <Button onClick={clickHandler} color="#E0E0E0" name="5" />
        <Button onClick={clickHandler} color="#E0E0E0" name="6" />
        <Button onClick={clickHandler} name="-" />
      </div>
      <div className="group-4">
        <Button onClick={clickHandler} color="#E0E0E0" name="1" />
        <Button onClick={clickHandler} color="#E0E0E0" name="2" />
        <Button onClick={clickHandler} color="#E0E0E0" name="3" />
        <Button onClick={clickHandler} name="+" />
      </div>
      <div className="group-5">
        <Button onClick={clickHandler} color="#E0E0E0" wide name="0" />
        <Button onClick={clickHandler} color="#E0E0E0" name="." />
        <Button onClick={clickHandler} name="=" />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};
