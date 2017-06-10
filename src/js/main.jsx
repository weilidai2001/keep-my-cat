require('../css/main.scss');
import React, {PropTypes, Component} from 'react';
import { render } from 'react-dom';
import Homepage from '../components/homepage';

render(
    <Homepage />,
    document.getElementById('root')
);