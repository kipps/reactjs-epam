import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import MovieItem from './MovieItem';

const MovieComponent = () => {
    return (
      <Container>
          <h2 className={'f-large'}>Title</h2>
          {/*<Switch>*/}
          {/*    /!*<Route path='/film/:id' component={MovieItem}/>*!/*/}
          {/*</Switch>*/}
      </Container>
    )
}

export default MovieComponent;