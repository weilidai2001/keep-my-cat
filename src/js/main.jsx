require('../css/main.scss');
import React, {PropTypes, Component} from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Homepage from '../pages/homepage';
import Intro from '../pages/intro';
import MissionDashboard from '../pages/mission-dashboard';
import MissionBody from '../pages/mission-body';

render(
    <Router>
        <div>
            <Route exact path="/" component={Homepage}/>
            <Route path="/intro" component={Intro}/>
            <Route path="/dashboards/:branch/:mission" component={MissionDashboard}/>
            <Route path="/missions/:branch/:mission" component={MissionBody}/>
        </div>
    </Router>,
    document.getElementById('root')
);