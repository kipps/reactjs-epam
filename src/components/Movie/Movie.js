import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import style from './Movie.css';

const Movie = ({item}) => (
  <Link to={`/movies/${item.id}`}>
    <div className={style.Movie}>
      <img src={item.poster_path} alt=""/>
      <h4>{item.title}</h4>
    </div>
  </Link>
);

Movie.propTypes = {
  item: PropTypes.shape({}).isRequired,
};

export default Movie;
