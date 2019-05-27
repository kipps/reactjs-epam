import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';

import Header from './components/layout/header';
import Content from './components/layout/content';
import Footer from './components/layout/footer';

const Root = () => (
  <div>
    <Header/>
    <Content/>
    <Footer/>
  </div>
);

export default hot(module)(Root);

