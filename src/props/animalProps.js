import PropTypes from 'prop-types';

const animalShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

const animalShapeOptional = PropTypes.oneOfType([
  PropTypes.shape({
    nope: PropTypes.string.isRequired,
  }),
  animalShape,
]);

export {animalShape, animalShapeOptional};
