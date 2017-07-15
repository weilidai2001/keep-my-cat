import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
    getFrameHeroImage,
} from '../../data/states';

class Slideshow extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            heroImageUrl: getFrameHeroImage('homepage')
        };

        this.oProceedClick = this.oProceedClick.bind(this);
    }

    oProceedClick() {
        this.props.history.push('/intro');
    }

    render() {
        const { heroImageUrl } = this.state;

        return (
            <div className="slideshow">
                <main style={{
                    overflow: 'initial',
                    marginTop: '20px'
                }}>
                    <img key={heroImageUrl}
                         style={{
                             position: 'absolute',
                             width: '100%'
                         }}
                         className="'slideshow__hero-image'" src={heroImageUrl}
                    />
                </main>
                <footer>
                    <button style={{
                        padding: '5px 15px',
                        width: 'auto',
                        fontSize: '18px',
                        margin: '20px auto'
                    }} onClick={this.oProceedClick}>START</button>
                </footer>
            </div>
        );
    }
}

export default withRouter(Slideshow);
