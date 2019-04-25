import React from 'react';
import {Switch, Route} from 'react-router-dom'
import MovieItem from './MovieItem';

const MovieComponent = () => {
    <Switch>
        <Route exact path='/film' component={FullMoiveComponent}/>
        <Route path='/film/:id' component={MovieItem}/>
    </Switch>
}

export default MovieComponent;