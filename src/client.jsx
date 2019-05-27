import React from 'react';
import {render} from 'react-dom';

import Root from './Root';
import ErrorBoundary from './components/functions/ErrorBoundary';
import './styles/App.scss';

const root = (
  <ErrorBoundary>
    <Root/>
  </ErrorBoundary>
);

render(root, document.getElementById('root'));
