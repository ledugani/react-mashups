import React from 'react';
import PropTypes from 'prop-types';

import './Form.css';

const defaultMashup = {
  name: '',
  imgUrl: '',
  description: '',
};

class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    newMashup: defaultMashup
  }

  formFieldStringState = (name, e) => {
    const tempMashup = {...this.state.newMashup};
    tempMashup[name] = e.target.value;
    this.setState({newMashup: tempMashup});
  }

  nameChange = (e) => {
    this.formFieldStringState('name', e);
  }

  imgChange = (e) => {
    this.formFieldStringState('imgUrl', e);
  }

  descriptionChange = (e) => {
    this.formFieldStringState('description', e);
  }

  formSubmit = (e) => {
    const {onSubmit} = this.props;
    const {newMashup} = this.state;

    e.preventDefault();
    if (
      newMashup.name &&
      newMashup.imgUrl &&
      newMashup.description
    ) {
    onSubmit(this.state.newMashup);
    this.setState({newMashup: defaultMashup});
    } else {
      alert('Fill out all sections of mashup form')
    }
  }

  render () {
    return (
      <div className="Form">
        <h1 className="FormHeader">Form</h1>
        <form onSubmit={this.formSubmit}>
          <div className="col-md-9">
            <fieldset>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Liger"
                className="form-control"
                value={this.state.newMashup.name}
                onChange={this.nameChange}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="imgUrl">Image URL:</label>
              <input
                type="text"
                id="imgUrl"
                placeholder="https://www.symbiancreate.co.uk/wp-content/uploads/2017/03/Mouse_Elephant.jpg"
                className="form-control"
                value={this.state.newMashup.imgUrl}
                onChange={this.imgChange}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="description">Description:</label>
              <textarea
                name=""
                className="form-control"
                rows="3"
                type="text"
                id="description"
                placeholder="A brief description of the animal mashup."
                value={this.state.newMashup.description}
                onChange={this.descriptionChange}>
              </textarea>
            </fieldset>
          </div>
          <button className="btn btn-primary col-xs-6 col-xs-offset-3">
            Save Mashup
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
