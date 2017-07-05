require('../css/main.scss');
import React, {PropTypes, Component} from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Homepage from '../pages/homepage';
import Intro from '../pages/intro';
import Dashboard from '../components/dashboard';

render(
    <Router>
        <div>
            <Route exact path="/" component={Homepage}/>
            <Route path="/intro" component={Intro}/>
            <Route path="/dashboard" component={Dashboard}/>
        </div>
    </Router>,
    document.getElementById('root')
);