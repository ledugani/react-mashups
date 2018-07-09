import React from 'react';

import './Animals.css';

class Animals extends React.Component {
  render () {
    const {animals} = this.props;

    const animalsItemComponents = animals.map((animalItem) => {
      return (
        <li key={animalItem.id}>{animalItem.name}</li>
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
