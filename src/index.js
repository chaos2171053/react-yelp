import 'core-js/fn/object/assign';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import {browserHistory, Router, Route} from 'react-router';
import makeRoutes from './routes';
import './app.css';


const routes = makeRoutes()
ReactDOM.render(<App history = {browserHistory} routes ={routes}/>, document.getElementById('app'));
