import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { getCurrentHeroImage, getNextHeroImage, getNextFrameId, getChoice, getNextFrameAnimation } from '../../data/states';

class Homepage extends Component {
    constructor(props, context) {
        super(props, context);

        const currentFrame = 'homepage';

        this.state = {
            currentFrame,
            heroImageUrl: getCurrentHeroImage(currentFrame),
            animation: 'slide--forward'
        };

        this.onChoice1Click = this.onChoice1Click.bind(this);
        this.onChoice2Click = this.onChoice2Click.bind(this);
    }

    onChoice1Click() {
        const { currentFrame } = this.state;

        this.setState({
            currentFrame: getNextFrameId(currentFrame, 'choice1'),
            heroImageUrl: getNextHeroImage(currentFrame, 'choice1'),
            animation: getNextFrameAnimation(currentFrame, 'choice1')
        })
    }

    onChoice2Click() {
        const { currentFrame } = this.state;

        this.setState({
            currentFrame: getNextFrameId(currentFrame, 'choice2'),
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
            renderedButton1 = <img src={button1.imageUrl} onClick={this.onChoice1Click} className="next-button-1"/>;
        } else {
            renderedButton1 = <button onClick={this.onChoice1Click}>{button1.text}</button>;
        }

        let renderedButton2;
        if (button2) {
            if (button2.imageUrl) {
                renderedButton2 = <img src={button2.imageUrl} onClick={this.onChoice2Click} className="next-button-2"/>;
            } else {
                renderedButton2 = <button onClick={this.onChoice2Click}>{button2.text}</button>;
            }
        }

        return (
            <div className="page">
                <div className="page-content">
                    <header>
                        <div className="next-options">
                            {renderedButton1}
                            {renderedButton2}
                        </div>
                    </header>
                    <main>
                        <ReactCSSTransitionGroup
                            transitionName={animation}
                            transitionEnterTimeout={0}
                            transitionLeaveTimeout={0}>
                            <img key={heroImageUrl} className="hero-image" src={heroImageUrl} alt=""/>
                        </ReactCSSTransitionGroup>
                    </main>
                    <footer>Footer</footer>
                </div>
            </div>
        );
    }
}

export default Homepage;