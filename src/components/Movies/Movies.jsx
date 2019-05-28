import React from 'react';
import PropTypes from 'prop-types';
import s from './Movies.css'

import Movie from '../Movie';

const Movies = ({ movies }) => (
  <div className={s.Movies}>
    {movies.map(item => (
      <Movie item={item} key={item.id} />
    ))}
  </div>
);

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Movies;
