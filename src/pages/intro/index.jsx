import React, { Component } from 'react';
import Carousel from '../../components/responsive-carousel';
import {preload} from '../../util/preload-image';
import {images as imageMapping} from '../../data/assets';

class Intro extends Component {

    render() {
        const images = [
            {src: imageMapping.intro1, cacheable: true},
            {src: '/intro_2.gif', cacheable: false},
            {src: '/intro_3.gif', cacheable: false},
            {src: '/intro_4.gif', cacheable: false},
            {src: '/intro_5.gif', cacheable: false},
            {src: '/intro_6.gif', cacheable: false},
            {src: '/intro_7.gif', cacheable: false},
            {src: '/intro_8.gif', cacheable: false},
            {src: '/intro_9.gif', cacheable: true},
            {src: '/intro_10.gif', cacheable: false},
            {src: '/intro_10a.jpg', cacheable: true},
            {src: '/intro_11.gif', cacheable: true},
        ];

        const rand = Math.random();
        const cacheBustingImages = images.map(image => image.cacheable ? image.src : `${image.src}?${rand}`);

        preload(cacheBustingImages).then();

        const nextDestination = '/dashboards/0/1';
        const buttonText = 'Skip intro';

        const props = { images: cacheBustingImages, nextDestination, buttonText };

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