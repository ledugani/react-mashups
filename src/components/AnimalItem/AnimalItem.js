import React from 'react';
import PropTypes from 'prop-types';

import {animalShape} from '../../props/animalProps';
import './AnimalItem.css';

class AnimalItem extends React.Component {
  static propTypes = {
    animal: animalShape,
    index: PropTypes.number,
    onSelect: PropTypes.func,
  }

  animalClick = (e) => {
    e.stopPropagation();
    const {animal, onSelect} = this.props;
    onSelect(animal.id);
  }

  render () {
    const {animal, index} = this.props;
    return (
      <li className='AnimalItem text-center' onClick={this.animalClick}>
        <span className="col-xs-2"><strong>Animal {index + 1}:</strong></span>
        <span className="col-xs-4"><img src={animal.imgUrl} alt={animal.description} /></span>
        <span className="col-xs-3">{animal.name}</span>
        <span className="col-xs-3">{animal.description}</span>
      </li>
    );
  }
};

export default AnimalItem;