import React, { Component } from 'react';

import connection from '../firebaseRequests/connection';
import animalsRequest from '../firebaseRequests/animals';

import Animals from '../components/Animals/Animals';
import Form from '../components/Form/Form';

import './App.css';

class App extends Component {
  state = {
    animals: [],
    selectedAnimalId: -1,
  };

  animalSelectEvent = (id) => {
    this.setState({
      selectedAnimalId: id,
    });
  };

  componentDidMount () {
    connection();

    animalsRequest.getRequest()
      .then((animals) => {
        this.setState({animals});
      })
      .catch((errrorrr) => {
        console.error('error GETting animals', errrorrr);
      });
  };

  render () {
    return (
      <div className="App">
        <div className="col-md-8">
          <Animals
            animals={this.state.animals}
            onAnimalSelection={this.animalSelectEvent}
          />
        </div>
        <div className="col-md-4">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
