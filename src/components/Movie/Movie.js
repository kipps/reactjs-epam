import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movie = ({ item }) => (
  <div className="movie">
    <Link to={`/movies/${item.login}`}>{item.login}</Link>
  </div>
);

Movie.propTypes = {
  item: PropTypes.shape({
    // login: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
