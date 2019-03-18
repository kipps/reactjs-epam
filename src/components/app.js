import React, {Component} from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Hero from './hero'
import ErrorBoundary from './functions/ErrorBoundary'

import '../styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Hero heroName="Batman"/>
          <Hero heroName="Superman"/>
          <Hero heroName="Joker"/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
