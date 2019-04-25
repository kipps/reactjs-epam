import React from 'react';
import mockMovie from './mock';
const MovieItem = (props) => {
    const movie = mockMovie.get(
      parseInt(props.match.params.id, 10)
    )
    if (!movie) {
        return <div>Sorry, but the player was not found</div>
    }
    return (
      <div>
          <h1>{movie.titlle} (#{movie.id})</h1>
      </div>
    )
}

export default MovieItem

