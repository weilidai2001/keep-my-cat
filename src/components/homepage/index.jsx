import React, { Component } from 'react';
import { connect } from 'react-redux';


class Homepage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            heroImageUrl: '/placeholder-1.jpg'
        };

        this.onChoice1Click = this.onChoice1Click.bind(this);
        this.onChoice2Click = this.onChoice2Click.bind(this);
    }

    onChoice1Click() {
        console.log('Choice 1 clicked');
        this.setState({
            heroImageUrl: '/placeholder-2.png'
        })
    }

    onChoice2Click() {

    }

    render() {
        return (
            <div className="page">
                <div className="page-content">
                    <header>
                        <div className="next-options">
                            <button onClick={this.onChoice1Click}>Next</button>
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