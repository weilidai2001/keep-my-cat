import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { withRouter } from 'react-router';
import cx from 'classnames';
import {
    getCurrentHeroImage,
    getCurrentQuestion,
    getNextFrameQuestion,
    getNextHeroImage,
    getNextFrameDestination,
    getChoice,
    getNextFrameAnimation,
    isNextFrameExternal
} from '../../data/states';

function moveToNextFrame (currentFrame, choice) {
    const nextFrameDestination = getNextFrameDestination(currentFrame, choice);

    if (isNextFrameExternal(currentFrame, choice)) {
        this.props.history.push(nextFrameDestination);
    } else {
        this.setState({
            currentFrame: nextFrameDestination,
            heroImageUrl: getNextHeroImage(currentFrame, choice),
            animation: getNextFrameAnimation(currentFrame, choice),
            question: getNextFrameQuestion(currentFrame, choice),
            showAnswer: false
        })
    }
}

class Slideshow extends Component {
    constructor(props, context) {
        super(props, context);

        const { initialFrame, initialAnimation } = props;
        const currentFrame = initialFrame;

        this.state = {
            currentFrame,
            heroImageUrl: getCurrentHeroImage(currentFrame),
            animation: initialAnimation,
            question: getCurrentQuestion(currentFrame),
            showAnswer: false
        };

        this.onChoice1Click = this.onChoice1Click.bind(this, props);
        this.onChoice2Click = this.onChoice2Click.bind(this, props);
        this.onImageClick = this.onImageClick.bind(this);
    }

    onChoice1Click() {
        const choice = 'choice1';
        const { currentFrame } = this.state;

        moveToNextFrame.call(this, currentFrame, choice);
    }

    onChoice2Click() {
        const choice = 'choice2';
        const { currentFrame } = this.state;

        moveToNextFrame.call(this, currentFrame, choice);
    }

    onImageClick() {
        const { currentFrame } = this.state;
        const button1 = getChoice(currentFrame, 'choice1');
        const button2 = getChoice(currentFrame, 'choice2');

        if ((button1 && button1.text || button2 && button2.text) && !this.state.showAnswer) {
            this.setState({ showAnswer: true });
        }
    }

    render() {
        const { currentFrame } = this.state;
        const button1 = getChoice(currentFrame, 'choice1');
        const button2 = getChoice(currentFrame, 'choice2');

        const { animation, heroImageUrl, question } = this.state;

        const answer1 = button1 && button1.text && <button onClick={this.onChoice1Click}>{button1.text}</button>;
        const answer2 = button2 && button2.text && <button onClick={this.onChoice2Click}>{button2.text}</button>;

        const navigation1 = button1 && button1.imageUrl && <img src={button1.imageUrl} onClick={this.onChoice1Click} className="slideshow__next-button-1"/>;
        const navigation2 = button2 && button2.imageUrl && <img src={button2.imageUrl} onClick={this.onChoice2Click} className="slideshow__next-button-2"/>;

        const navigationClass = navigation1 && navigation2 ? 'slideshow__navigation--both': 'slideshow__navigation--single';

        return (
            <div className="slideshow">
                <header>
                    {question && <div className="slideshow__question">{question}</div>}
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
                             onClick={this.onImageClick}
                        />
                    </ReactCSSTransitionGroup>
                </main>
                <footer>
                    <div className={navigationClass}>
                        {navigation1}
                        {navigation2}
                    </div>
                </footer>
            </div>
        );
    }
}

export default withRouter(Slideshow);
