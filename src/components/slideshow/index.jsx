import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { withRouter } from 'react-router';
import { getCurrentHeroImage,
    getNextHeroImage,
    getNextFrameDestination,
    getChoice,
    getNextFrameAnimation,
    isNextFrameExternal
} from '../../data/states';

class Slideshow extends Component {
    constructor(props, context) {
        super(props, context);

        const { initialFrame, initialAnimation } = props;
        const currentFrame = initialFrame;

        this.state = {
            currentFrame,
            heroImageUrl: getCurrentHeroImage(currentFrame),
            animation: initialAnimation
        };

        this.onChoice1Click = this.onChoice1Click.bind(this, props);
        this.onChoice2Click = this.onChoice2Click.bind(this, props);
    }

    onChoice1Click() {

        const { currentFrame } = this.state;
        const nextFrameDestination = getNextFrameDestination(currentFrame, 'choice1');

        if (isNextFrameExternal(currentFrame, 'choice1')) {
            this.props.history.push(nextFrameDestination);
        } else {
            this.setState({
                currentFrame: nextFrameDestination,
                heroImageUrl: getNextHeroImage(currentFrame, 'choice1'),
                animation: getNextFrameAnimation(currentFrame, 'choice1')
            })
        }
    }

    onChoice2Click() {
        const { currentFrame } = this.state;

        this.setState({
            currentFrame: getNextFrameDestination(currentFrame, 'choice2'),
            heroImageUrl: getNextHeroImage(currentFrame, 'choice2'),
            animation: getNextFrameAnimation(currentFrame, 'choice2')
        })
    }

    render() {
        const { currentFrame } = this.state;
        const button1 = getChoice(currentFrame, 'choice1');
        const button2 = getChoice(currentFrame, 'choice2');

        const { animation, heroImageUrl } = this.state;

        let renderedButton1;
        if (button1.imageUrl) {
            renderedButton1 = <img src={button1.imageUrl} onClick={this.onChoice1Click} className="slideshow__next-button-1"/>;
        } else {
            renderedButton1 = <button onClick={this.onChoice1Click}>{button1.text}</button>;
        }

        let renderedButton2;
        if (button2) {
            if (button2.imageUrl) {
                renderedButton2 = <img src={button2.imageUrl} onClick={this.onChoice2Click} className="slideshow__next-button-2"/>;
            } else {
                renderedButton2 = <button onClick={this.onChoice2Click}>{button2.text}</button>;
            }
        }

        return (
            <div className="slideshow">
                <header>
                    <div className="slideshow__next-options">
                        {renderedButton1}
                        {renderedButton2}
                    </div>
                </header>
                <main>
                    <ReactCSSTransitionGroup
                        transitionName={animation}
                        transitionEnterTimeout={0}
                        transitionLeaveTimeout={0}>
                        <img key={heroImageUrl} className="slideshow__hero-image" src={heroImageUrl} alt=""/>
                    </ReactCSSTransitionGroup>
                </main>
                <footer>Footer</footer>
            </div>
        );
    }
}

export default withRouter(Slideshow);