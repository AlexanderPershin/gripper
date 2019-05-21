// Modules
import React from 'react';
import ReactDOM from 'react-dom';
// React router
import { HashRouter as Router, Route } from 'react-router-dom';
// Components
import App from './components/App';
import AppRu from './components_ru/App';
// Styles
import './sass/styles.scss';
// Render
ReactDOM.render(
  <Router>
    <Route exact path='/' component={App} />
    <Route exact path='/ru' component={AppRu} />
  </Router>,
  document.getElementById('root')
);
