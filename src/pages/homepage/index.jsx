import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {

    render() {

        return (
            <div className="page">
                <div className="page-content">
                    <ul>
                        <li>Homepage</li>
                        <li><Link to="/intro">Slideshow</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Homepage;