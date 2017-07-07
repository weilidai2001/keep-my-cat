import React, { Component } from 'react';
import Slideshow from '../../components/slideshow';

class Homepage extends Component {

    render() {
        const initialFrame = 'homepage';
        const initialAnimation = 'slide--forward';
        const props = { initialFrame, initialAnimation };

        return (
            <div className="page">
                <div className="page-content">
                    <Slideshow {...props} />
                </div>
            </div>
        );
    }
}

export default Homepage;