require('../css/main.scss');
import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Homepage from '../pages/homepage';
import Intro from '../pages/intro';
import MissionDashboard from '../pages/mission-dashboard';
import MissionBody from '../pages/mission-body';
import Retro from '../pages/retro';
import Inspection from '../pages/linear-inspection';

import {preload} from '../util/preload-image';
import {images} from '../data/assets';

preload([
    images.intro1,
    images.arm,
    images.dashboard_title,
    images.dashboard_active,
    images.dashboard_completed,
    images.dashboard_incomplete,
    images.dashboard_path,
    images.dashboard_question_mark
]).then();

render(
    <Router>
        <div>
            <Route exact path="/" component={Homepage}/>
            <Route path="/intro" component={Intro}/>
            <Route path="/dashboards/:branch/:mission" component={MissionDashboard}/>
            <Route path="/missions/:branch/:mission" component={MissionBody}/>
            <Route path="/retro" component={Retro}/>
            <Route path="/inspection" component={Inspection}/>
        </div>
    </Router>,
    document.getElementById('root')
);