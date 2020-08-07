import React from 'react';
import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';
import Calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
      numOne: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(prevState => {
      Calculate(prevState, buttonName);
    })
  }

  render() {
    return (
      <div id="calculation-interface">
        <Display />
        <ButtonPanel clickHandler = {e => this.handleClick(e)}/>
      </div>
    );
  }

}

