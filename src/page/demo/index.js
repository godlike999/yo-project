import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link } from '$router';
import HomePage from './home';
import yoHistory from '../../common/history';

const Home = require.async('./home');
const List = require.async('./list');
const Detail = require.async('./detail');
const Project = require.async('./project');

const Root = () => (
    <Router history={yoHistory}>
        <Route path="/">
            <IndexRoute component={HomePage}/>
            <Route path="home" getComponent={Home} />
            <Route path="list" getComponent={List} />
            <Route path="detail/:id" getComponent={Detail}/>
            <Route path="project" getComponent={Project} />
        </Route>
    </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
