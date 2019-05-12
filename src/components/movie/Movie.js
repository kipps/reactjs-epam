import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Movie = (props) => {
  let getPath = location.pathname;
  const path = ( getPath === '/'
    || getPath.includes('/search=')
    || getPath.includes('/sortOrder=')) ? `/film/${props.id}` : props.id;

  return (
    <div className={'Movie mb-32'}>
      <Link to={`${path}`} className='link-clear block'>
        <img alt={props.title} src={props.poster_path} className='Movie__img'/>
      </Link>
      <div>
        <div className='mb-8'>
          <div className='Movie__date mb-8'>
            {props.release_date}
          </div>
          <h3>
            <Link to={`${path}`} className='link-clear block'>{props.title}</Link></h3>
        </div>
        <div className='Movie__genres'>
          <span>
            {props.genres.map((g, i) => <small key={i}>{g}</small>)}
         </span>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  tagline: PropTypes.string,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  budget: PropTypes.number,
  revenue: PropTypes.number,
  runtime: PropTypes.number,
  genres: PropTypes.array
}

export default Movie;