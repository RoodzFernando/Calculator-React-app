import React from 'react';
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