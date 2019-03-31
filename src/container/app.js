import React, {Component} from "react";
import Header from './../components/layout/header'
import Content from './../components/layout/content'
import Footer from './../components/layout/footer'

import ErrorBoundary from '../components/functions/ErrorBoundary'
import '../styles/App.scss';

const movies = [
  {
    title: 'Begin from start',
    genre: 'Драма, Комедия',
    date: '2018',
    img: 'medium',
    key: '3432424'
  },
  {
    title: 'Outlaw king',
    genre: 'Драма, Комедия',
    date: '2017',
    img: 'medium_0',
    key: 'sdv3323'
  }
];

class App extends React.Component {
  state = {
    movies:[]
  }

  componentDidMount() {
    fetch('/movies')
      .then(res => res.json())
      .then(movies => this.setState({movies}));
  }

  render() {
    return (
      <ErrorBoundary>
        <div className="App body">
          {this.state.movies.map((movie) =>
            <p key={movie.id}>{movie.title}</p>
          )}
          <Header/>
          <Content movies={movies}/>
          <Footer/>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
