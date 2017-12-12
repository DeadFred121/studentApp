import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import ContentSwitch from './ContentSwitch';

const MainApp = () => (
  <Router>
    <div className="App">
      <ContentSwitch />
    </div>
  </Router>
)

export default MainApp;