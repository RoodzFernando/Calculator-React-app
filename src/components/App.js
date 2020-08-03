import React from 'react';
// import ReactDom from 'react-dom';
import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';

export default function App() {
  return (
    <div id="calculation-interface">
      <Display />
      <ButtonPanel />
    </div>
  );
}

// ReactDom.render(<App/>, document.getElementById('root'));