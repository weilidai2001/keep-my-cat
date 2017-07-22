import React, { Component } from 'react';
import Carousel from '../../components/responsive-carousel';
import {preload} from '../../util/preload-image';
import {images as imageMapping} from '../../data/assets';

class Intro extends Component {

    render() {
        const images = [
            {src: imageMapping.intro1, cacheable: false},
            {src: '/intro_2.gif', cacheable: false},
            {src: '/intro_3.gif', cacheable: false},
            {src: '/intro_4.gif', cacheable: false},
            {src: '/intro_5.gif', cacheable: false},
            {src: '/intro_6.gif', cacheable: false},
            {src: '/intro_7.gif', cacheable: false},
            {src: '/intro_8.gif', cacheable: false},
        ];

        const rand = Math.random();
        const cacheBustingImages = images.map(image => image.cacheable ? image.src : `${image.src}?${rand}`);

        preload(cacheBustingImages).then();

        const nextDestination = '/dashboards/0/1';
        const buttonText = 'Skip intro';
        const buttonTextLast = 'Start game';

        const props = { images: cacheBustingImages, nextDestination, buttonText, buttonTextLast };

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