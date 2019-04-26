import React from 'react';
import {Switch, Route} from 'react-router-dom'
import MoviesList from '../movies-list/MoviesList'
import PageNotFoundComponent from "../page404/PageNotFoundComponent";
import MovieComponent from "../movie/MovieComponent";

const Home = () => {
    <MoviesList />
}
const page404 = () => {
    <PageNotFoundComponent />
}
const search = () => {
    <MoviesList />
}

class Content extends React.Component {
    render() {
        
        return (
            <div className='Content'>
                <div className='pt-24 pb-24'>
                    <Switch>
                        <Route exact path='/' component={MoviesList}/>
                        <Route path='/film' component={MovieComponent}/>
                        <Route path='/search' component={MoviesList}/>
                        <Route component={PageNotFoundComponent}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Content;
