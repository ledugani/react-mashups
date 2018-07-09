import React from 'react';
import PropTypes from 'prop-types';

import AnimalItem from '../AnimalItem/AnimalItem';
import {animalShape} from '../../props/animalProps';
import './Animals.css';

class Animals extends React.Component {
  static propTypes = {
    animals: PropTypes.arrayOf(animalShape),
    onAnimalSelection: PropTypes.func,
  };

  render () {
    const {animals, onAnimalSelection} = this.props;

    const animalsItemComponents = animals.map((animal, index) => {
      return (
        <AnimalItem
          animal={animal}
          index={index}
          key={animal.id}
          onSelect={onAnimalSelection}
        />
      );
    });

    return (
      <div className="Animals">
        <h1>Animals</h1>
        <ul>
          {animalsItemComponents}
        </ul>
      </div>
    );
  }
}

export default Animals;
