import React from 'react';

const Movie = (props) => {
  return (
    <div className='Movie'>
      <img alt={props.alt} src={window.location.origin + '/src/images/' + props.img + '.jpg'} className='Movie__img'/>
      <div>
        <div className='flex space-between v-center mb-8'>
          <h3>{props.title}</h3>
          <span className='Movie__date'>
            {props.date}
          </span>
        </div>
        <span><small>{props.genre}</small></span>
      </div>
    </div>
  );
}

export default Movie;