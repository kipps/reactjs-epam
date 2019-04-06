import {createStore} from "redux";
import {Provider} from 'react-redux';
import React, {Component} from "react";
import axios from 'axios';

import Header from './../components/layout/header';
import Content from './../components/layout/content';
import Footer from './../components/layout/footer';

import ErrorBoundary from '../components/functions/ErrorBoundary';
import '../styles/App.scss';

const rootReducer = function (state, action) {
  // body
}

const store = createStore(rootReducer);

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Provider store={store}>
          <div className="App body">
            <Header/>
            <Content/>
            <Footer/>
          </div>
        </Provider>
      </ErrorBoundary>
    );
  }
}

export default App;
