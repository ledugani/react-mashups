import React, { Component } from 'react';

import Animals from '../components/Animals/Animals';

import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="col-md-8">
          <Animals />
        </div>
      </div>
    );
  }
}

export default App;
