import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { withRouter } from 'react-router';
import cx from 'classnames';
import {
    getFrameHeroImage,
    getFrameScript,
    getChoice,
    isFrameSingleChoice,
    getFrameAnimation,
    getNextFrame,
    isFrameExternal,
    getTheOnlyDestination,
    getReward,
    isAnswer,
    wonStateId,
    lostStateId,
    isGameFinished,
    retroPageUrl,
    isFinalMission,
    getMinimumBalance
} from '../../data/states';
import {getBalance, setBalance, addMission} from '../../util/store';

import {preloadNextState} from '../../util/preload-image';

function moveToNextFrame (currentFrame, choice) {
    this.setState({
        showAnswer: false
    });

    if (isAnswer(currentFrame)) {
        recordMissionHistory(currentFrame);
        recordBalance(currentFrame);
    }

    let nextFrameId;
    if (isGameFinished(currentFrame)) {
        nextFrameId = retroPageUrl;
    } else if (isFinalMission(currentFrame)) {
        if (getBalance() >= 5000) {
            nextFrameId = wonStateId;
        } else {
            nextFrameId = lostStateId;
        }
    } else if (getBalance() <= getMinimumBalance(currentFrame)) {
        nextFrameId = lostStateId;
    } else if (getBalance() >= 5000) {
        nextFrameId = wonStateId;
    } else if (choice) {
        nextFrameId = getNextFrame(currentFrame, choice)
    } else {
        nextFrameId = getTheOnlyDestination(currentFrame);
    }

    if (isFrameExternal(nextFrameId)) {
        this.props.history.push(nextFrameId);
    } else {
        this.setState({
            currentFrame: nextFrameId,
            heroImageUrl: getFrameHeroImage(nextFrameId),
            animation: getFrameAnimation(nextFrameId),
            script: getFrameScript(nextFrameId)
        });
    }
}

function recordMissionHistory (currentMissionId) {
    addMission(currentMissionId);
}

function recordBalance (currentFrameId) {
    const reward = getReward(currentFrameId);
    setBalance(getBalance() + reward);
}

class Slideshow extends Component {
    constructor(props, context) {
        super(props, context);

        const { initialFrame, initialAnimation } = props;
        const currentFrame = initialFrame;

        this.state = {
            currentFrame,
            heroImageUrl: getFrameHeroImage(currentFrame),
            animation: initialAnimation,
            script: getFrameScript(currentFrame),
            showAnswer: false,
        };

        this.onChoice1Click = this.onChoice1Click.bind(this, props);
        this.onChoice2Click = this.onChoice2Click.bind(this, props);
        this.onNextFrameClick = this.onNextFrameClick.bind(this);
    }

    onChoice1Click() {
        const { currentFrame } = this.state;
        moveToNextFrame.call(this, currentFrame, 'choice1');
    }

    onChoice2Click() {
        const { currentFrame } = this.state;
        moveToNextFrame.call(this, currentFrame, 'choice2');
    }

    onNextFrameClick() {
        const { currentFrame } = this.state;

        if (isFrameSingleChoice(currentFrame)) {
            moveToNextFrame.call(this, currentFrame);
        } else if (!this.state.showAnswer) {
            this.setState({ showAnswer: true });
        }
    }

    render() {
        const { currentFrame } = this.state;
        const button1 = getChoice(currentFrame, 'choice1');
        const button2 = getChoice(currentFrame, 'choice2');

        const { animation, heroImageUrl, script } = this.state;
        const answer1 = button1 && button1.text && <button onClick={this.onChoice1Click}>{button1.text}</button>;
        const answer2 = button2 && button2.text && <button onClick={this.onChoice2Click}>{button2.text}</button>;

        if (!this.state.showAnswer) { // prevent re-running on answer show
            preloadNextState(currentFrame);
        }

        return (
            <div className="slideshow" onClick={this.onNextFrameClick}>
                <header>
                    {script && <div className="slideshow__script" dangerouslySetInnerHTML={{__html: script}} />}
                </header>
                <main>
                    <div className={cx({'slideshow__answers--hidden': !this.state.showAnswer}, {'slideshow__answers--show': this.state.showAnswer })}>
                        {answer1}
                        {answer2}
                    </div>
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
                    {
                        !this.state.showAnswer && <div className="slideshow__continue">
                            <img src="/slideshow_continue.png" />
                        </div>
                    }
                </main>
            </div>
        );
    }
}

export default withRouter(Slideshow);
