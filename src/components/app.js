import React, {Component} from "react";

import '../styles/App.css';

const element = React.createElement;

const Hello = () => {
    return element('div', { className: 'header' },
    [
      element('h1', { key: 'title' }, 'Hello world'),
      element('h2', { className: 'small-h', key: 'subtitle' }, 'Start work with ReactJS'),
      element('p', { className: 'text', key: 'text' }, 'Simple text')
    ]
  );
};

class App extends React.Component {
  state = {
    count: 1
  }
  render(){
    return (
      <>
        <Hello/>
        <p className="text-center">State count is <b>{this.state.count}</b></p>
      </>
    )
  }
}

export default App;
