require('../css/main.scss');
import React, {PropTypes, Component} from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Homepage from '../pages/homepage';
import Intro from '../pages/intro';

render(
    <Router>
        <div>
            <Route exact path="/" component={Homepage}/>
            <Route path="/intro" component={Intro}/>
        </div>
    </Router>,
    document.getElementById('root')
);