import React, { Component } from 'react';

import connection from '../firebaseRequests/connection';

import Animals from '../components/Animals/Animals';
import Form from '../components/Form/Form';

import './App.css';

class App extends Component {

  componentDidMount () {
    connection();
  };

  render () {
    return (
      <div className="App">
        <div className="col-md-8">
          <Animals />
        </div>
        <div className="col-md-4">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
