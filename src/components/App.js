/* eslint-disable react/no-unused-state */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      current: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(prevState => {
      Calculate(prevState, buttonName);
    });

    const state = Calculate(this.state, buttonName);
    this.setState(state);
  }

  render() {
    const { current } = this.state;
    return (
      <div id="calculation-interface">
        <Display result={current} />
        <ButtonPanel clickHandler={e => this.handleClick(e)} />
      </div>
    );
  }
}
