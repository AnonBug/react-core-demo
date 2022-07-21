import './App.css';
import React from 'react';

import Context from './components/context'
import ForwardRefs from './components/refs-forward';
import {DemoWrap, Demo2} from './components/hocs'

function App() {
  const ref1 = React.useRef();

  return (
    <>
      <Demo2 ref={ref1} />
    </>
  );
}

export default App;
