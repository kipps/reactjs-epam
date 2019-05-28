import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MoviesPage.scss';
import Movies from '../../components/Movies';
import Loader from '../../components/Loader';

const MoviesPage = ({ loading, movies, fetchMovies }) => {

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h2 className={styles.title}>Movies Page</h2>
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
