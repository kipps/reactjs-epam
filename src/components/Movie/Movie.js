import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movie = ({ item }) => (
  <div className="movie">
    {item.title}
  </div>
);

Movie.propTypes = {
  item: PropTypes.shape({
    // login: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
