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
      operation: ''
    }
  }
  handleClick(e) {
    this.setState(prevState => {
      Calculate(prevState, e);
    })
    // console.log(/\d/.test(e.target.textContent) ? e.target.textContent : false)
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