import React, { Component } from 'react';
import Carousel from '../../components/responsive-carousel';

class Intro extends Component {

    render() {
        const images = [
            '/intro_1.gif',
            '/intro_2.gif',
            '/intro_3.gif',
            '/intro_4.gif',
            '/intro_5.gif',
            '/intro_6.gif',
            '/intro_7.gif',
            '/intro_8.gif',
            '/intro_9.gif',
            '/intro_10.gif',
            '/intro_10a.jpg',
            '/intro_11.gif'
        ];

        const nextDestination = '/dashboards/0/1';
        const buttonText = 'Skip intro';

        const props = { images, nextDestination, buttonText };


        return (
            <div className="page">
                <div className="page-content">
                    <Carousel {...props} />
                </div>
            </div>
        );
    }
}

export default Intro;