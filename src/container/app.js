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
  stage = {
  }

  render() {
    return (
      <ErrorBoundary>
        <div className="App body">
          <Header/>
          <Content movies={movies}/>
          <Footer/>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
