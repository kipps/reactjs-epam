import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Movies from '../../components/Movies';
import Loader from '../../components/Loader';

const MoviesPage = ({ loading, movies, fetchMovies }) => {

  useEffect(() => {
    fetchMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      <Loader loading={loading} />
      <Movies movies={movies} />
    </div>
  );
};

MoviesPage.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({})),
};
MoviesPage.defaultProps = {
  movies: [],
};

export default MoviesPage;
