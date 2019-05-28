import React from 'react';
import { hydrate } from 'react-dom';

import Root from './Root';
import ErrorBoundary from './components/functions/ErrorBoundary';
import './styles/App.scss';

const root = (
  <ErrorBoundary>
    <Root/>
  </ErrorBoundary>
);

hydrate(root, document.getElementById('root'));