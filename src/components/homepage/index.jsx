import React, { Component } from 'react';
import { frames } from '../../data/states';

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
        const nextFrameId = frames[this.state.currentFrame].choice1.destination;
        const nextFrame = frames[nextFrameId];

        this.setState({
            currentFrame: nextFrameId,
            heroImageUrl: nextFrame.heroImageUrl
        })
    }

    onChoice2Click() {
        const nextFrameId = frames[this.state.currentFrame].choice2.destination;

        const nextFrame = frames[nextFrameId];

        this.setState({
            currentFrame: nextFrameId,
            heroImageUrl: nextFrame.heroImageUrl
        })
    }

    render() {

        const button1 = frames[this.state.currentFrame].choice1;
        const button2 = frames[this.state.currentFrame].choice2;

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
                        <img className="hero-image" src={this.state.heroImageUrl} alt=""/>
                    </main>
                    <footer>Footer</footer>
                </div>
            </div>
        );
    }
}

export default Homepage;