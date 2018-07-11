import React, { Component } from 'react';

import connection from '../firebaseRequests/connection';
import animalsRequest from '../firebaseRequests/animals';

import Animals from '../components/Animals/Animals';
import Form from '../components/Form/Form';

import './App.css';

class App extends Component {
  state = {
    animals: [],
  };

  formSubmitEvent = (newMashup) => {
    animalsRequest.postRequest(newMashup)
      .then(() => {
        animalsRequest.getRequest()
          .then((animals) => {
            this.setState({animals});
          });
      })
      .catch((errr) => {
        console.error('error posting animal to firebase', errr);
      })
  }

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
          <Animals animals={this.state.animals}/>
        </div>
        <div className="col-md-4">
          <Form
            onSubmit={this.formSubmitEvent}
          />
        </div>
      </div>
    );
  }
}

export default App;
