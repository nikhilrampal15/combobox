import React from 'react';
import fruits from './utils/fruitsdata';
import Combobox from './components/Combobox';

function App() {
  return (
    <div className="App">
        <Combobox options={fruits} />
    </div>
  );
}

export default App;
