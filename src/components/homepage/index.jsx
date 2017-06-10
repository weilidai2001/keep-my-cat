import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { frames, getNextHeroImage, getNextFrameId } from '../../data/states';

class Homepage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            currentFrame: 'homepage',
            heroImageUrl: frames.homepage.heroImageUrl
        };

        this.onChoice1Click = this.onChoice1Click.bind(this);
        this.onChoice2Click = this.onChoice2Click.bind(this);
    }

    onChoice1Click() {
        const { currentFrame } = this.state;

        this.setState({
            currentFrame: getNextFrameId(currentFrame, 'choice1'),
            heroImageUrl: getNextHeroImage(currentFrame, 'choice1')
        })
    }

    onChoice2Click() {
        const { currentFrame } = this.state;

        this.setState({
            currentFrame: getNextFrameId(currentFrame, 'choice2'),
            heroImageUrl: getNextHeroImage(currentFrame, 'choice2')
        })
    }

    render() {
        // TODO: implement sliding React Components https://medium.com/front-end-developers/sliding-react-components-4873e232907e
        // using ReactTransitionGroup add-on https://facebook.github.io/react/docs/animation.html
        const button1 = frames[this.state.currentFrame].choice1;
        const button2 = frames[this.state.currentFrame].choice2;
        const { heroImageUrl } = this.state;

        return (
            <div className="page">
                <div className="page-content">
                    <header>
                        <div className="next-options">
                            <button onClick={this.onChoice1Click}>{button1.text}</button>
                            {!!button2 && <button onClick={this.onChoice2Click}>{button2.text}</button>}
                        </div>
                    </header>
                    <main>
                        <ReactCSSTransitionGroup
                            transitionName="slide"
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={1000}>
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