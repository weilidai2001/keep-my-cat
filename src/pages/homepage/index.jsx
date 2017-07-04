import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {

    render() {

        return (
            <div className="page">
                <div className="page-content">
                    Homepage
                    <Link to="/intro">Slideshow</Link>
                </div>
            </div>
        );
    }
}

export default Homepage;