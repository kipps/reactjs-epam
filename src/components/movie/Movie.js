import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
  return (
    <div className='Movie mb-32'>
      <img alt={props.title} src={props.poster_path} className='Movie__img'/>
      <div>
        <div className='mb-8'>
          <div className='Movie__date mb-8'>
            {props.release_date}
          </div>
          <h3>{props.title}</h3>
        </div>
        <div className='Movie__genres'>
          <span>
            {props.genres.map((g, i)=> <small key={i}>{g}</small>)}
         </span>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {}

export default Movie;