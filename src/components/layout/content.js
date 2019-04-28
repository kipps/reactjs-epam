import React from 'react';
import {Switch, Route} from 'react-router-dom'
import MoviesList from '../movies-list/MoviesList'
import PageNotFoundComponent from "../page404/PageNotFoundComponent";
import MovieComponent from "../movie/MovieComponent";
import MovieItem from "../movie/MovieItem";

class Content extends React.Component {
    render() {
        
        return (
            <div className='Content'>
                <div className='pt-24 pb-24'>
                    <Switch>
                        <Route exact={true} path='/' component={MoviesList}/>
                        <Route exact={true} path='/film/:id' component={MovieItem}/>
                        <Route exact={true} path='/film' component={MovieComponent}/>
                        <Route exact={true} path='/search' component={MoviesList}/>
                        <Route component={PageNotFoundComponent}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Content;
