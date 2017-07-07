import React, { Component } from 'react';
import Slideshow from '../../components/slideshow';

class Intro extends Component {

    render() {
        const initialFrame = 'intro1';
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

export default Intro;