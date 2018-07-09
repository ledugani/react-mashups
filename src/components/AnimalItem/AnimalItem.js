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
    const {animal} = this.props;
    return (

      <div className='panel panel-default AnimalItem col-md-4'>
        <div className='panel-heading'>
          <h3 className='panel-title'>{animal.name}</h3>
        </div>
        <div className='panel-body'>
          <img src={animal.imgUrl} alt={animal.description} />
          <br />
          {animal.description}
          <br />
          <button type="button" className="btn btn-primary" onClick={this.animalClick}>Primary</button>
        </div>
      </div>
    );
  }
};

export default AnimalItem;