import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { withRouter } from 'react-router';
import cx from 'classnames';
import {
    getFrameHeroImage,
    getFrameScript,
    getFrameAnimation,
    getFrameIdByIndex
} from '../../data/states';

class Slideshow extends Component {
    constructor(props, context) {
        super(props, context);

        const currentFrame = getFrameIdByIndex(0);

        this.state = {
            currentIndex: 0,
            currentFrame,
            heroImageUrl: getFrameHeroImage(currentFrame),
            animation: 'jackInTheBox',
            script: getFrameScript(currentFrame),
            showAnswer: false,
        };

        this.onNextFrameClick = this.onNextFrameClick.bind(this);
        this.onPreviousFrameClick = this.onPreviousFrameClick.bind(this);
    }

    onNextFrameClick() {
        const { currentIndex } = this.state;

        const nextFrameId = getFrameIdByIndex(currentIndex + 1);

        this.setState({
            currentIndex: currentIndex + 1,
            currentFrame: nextFrameId,
            heroImageUrl: getFrameHeroImage(nextFrameId),
            animation: getFrameAnimation(nextFrameId),
            script: getFrameScript(nextFrameId)
        });
    }

    onPreviousFrameClick() {
        const { currentIndex } = this.state;

        const nextFrameId = getFrameIdByIndex(currentIndex - 1);

        this.setState({
            currentIndex: currentIndex - 1,
            currentFrame: nextFrameId,
            heroImageUrl: getFrameHeroImage(nextFrameId),
            animation: getFrameAnimation(nextFrameId),
            script: getFrameScript(nextFrameId)
        });
    }

    render() {
        const { animation, heroImageUrl, script, currentFrame } = this.state;

        return (
            <div className="slideshow">
                <header>
                    {script && <div className="slideshow__script" dangerouslySetInnerHTML={{__html: script}} />}
                </header>
                <main onClick={this.onNextFrameClick}>
                    <ReactCSSTransitionGroup
                        transitionName={animation}
                        transitionEnterTimeout={0}
                        transitionLeaveTimeout={0}>
                        <img key={heroImageUrl}
                             className={
                                 cx(
                                     'slideshow__hero-image',
                                     {'slideshow__hero-image--transparent': this.state.showAnswer}
                                 )
                             }
                             src={heroImageUrl}
                        />
                    </ReactCSSTransitionGroup>
                </main>
                <footer>
                    <button style={{padding: '0', width: 'auto', fontSize: '12px'}}
                            onClick={this.onPreviousFrameClick}>Go back</button>
                    {currentFrame}
                </footer>
            </div>
        );
    }
}

export default withRouter(Slideshow);
