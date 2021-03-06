import React from 'react';
import PropTypes from 'prop-types';

import AnimalItem from '../AnimalItem/AnimalItem';
import {animalShape} from '../../props/animalProps';
import './Animals.css';

class Animals extends React.Component {
  static propTypes = {
    animals: PropTypes.arrayOf(animalShape),
  };

  render () {
    const {animals} = this.props;

    const animalsItemComponents = animals.map((animal, index) => {
      return (
        <AnimalItem
          animal={animal}
          index={index}
          key={animal.id}
        />
      );
    });

    return (
      <div className="Animals">
        <h1 id="AnimalsHeading">Animals</h1>
        <div className="AllAnimals">
          {animalsItemComponents}
        </div>
      </div>
    );
  }
}

export default Animals;
