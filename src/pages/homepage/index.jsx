import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {

    render() {

        return (
            <div className="page">
                <div className="page-content">
                    <ul>
                        <li><Link to="/intro">Intro</Link></li>
                        <li><Link to="/dashboards/0/1">Start mission</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Homepage;