import React, { Component } from 'react';
import './styles/App.css';

import Landing from './components/Landing/Landing'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}

export default App;