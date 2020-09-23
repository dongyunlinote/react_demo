import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {process.env.REACT_APP_API_URL}
    </div>
  );
}

export default App;
