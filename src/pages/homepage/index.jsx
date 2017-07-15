import React, { Component } from 'react';
import Slideshow from '../../components/slideshow';
import {setBalance, clearMissionsHistory} from '../../util/store';

class Homepage extends Component {

    render() {
        const initialFrame = 'homepage';
        const initialAnimation = 'slide--forward';
        const props = { initialFrame, initialAnimation };

        setBalance(0);
        clearMissionsHistory();

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