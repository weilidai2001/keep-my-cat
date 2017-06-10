import React from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Homepage from '../components/homepage';

const routes = (
    <HashRouter>
        <Route exact path="/" component={Homepage}/>
    </HashRouter>
);

export default routes;