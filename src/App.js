import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './page/Home'
import Info from './page/Info'

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home}  />
        <Route path="/info" component={Info} />
    </Router>

    // <div className="App">
    //   {process.env.REACT_APP_API_URL}
    // </div>
  );
}

export default App;
