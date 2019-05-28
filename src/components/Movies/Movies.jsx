import React from 'react';
import PropTypes from 'prop-types';

import Movie from '../Movie';

const Movies = ({ movies }) => (
  <div className="movies">
    {movies.map(item => (
      <Movie item={item} key={item.id} />
    ))}
  </div>
);

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Movies;
