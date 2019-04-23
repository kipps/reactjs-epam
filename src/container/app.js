import React, {Component} from "react";
import Header from './../components/layout/header';
import Content from './../components/layout/content';
import Footer from './../components/layout/footer';

import ErrorBoundary from '../components/functions/ErrorBoundary';
import '../styles/App.scss';

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
          <div className="App body">
            <Header/>
            <Content/>
            <Footer/>
          </div>
      </ErrorBoundary>
    );
  }
}

export default App;

