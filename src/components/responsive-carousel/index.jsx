import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {Carousel} from 'react-responsive-carousel';

// carousel styles
import 'react-responsive-carousel/lib/styles/carousel.css';

const styles = {
    footer: {
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        fontSize: '15px',
        width: 'auto',
        padding: '5px 15px'
    }
};

class ResponsiveCarousel extends Component {
    constructor(props, context) {
        super(props, context);

        this.onNextDestinationClick = this.onNextDestinationClick.bind(this);
    }

    onNextDestinationClick() {
        this.props.history.push(this.props.nextDestination);
    }

    render(){
        const { images, buttonText } = this.props;
        const createImageNameByIndex = index => `intro-image-${index}`;

        const config = {
            showArrows: false,
            showStatus: false,
            showIndicators: false,
            showThumbs: false,
            emulateTouch: true,
            onChange: (index) => {
                const id = createImageNameByIndex(index);
                const el = document.getElementById(id);
                el.src = el.dataset.src;
                if (index >= 1) {
                    document.querySelector('.responsive-carousel__prompt').style.display = 'none';
                }
            }
        };

        const placeholder = '/white.png';

        const props = src => ({
            'data-src': src
        });

        return (
            <div className="responsive-carousel">
                <header/>
                <main>
                    <img className="responsive-carousel__prompt" src="/slideshow_continue.png"/>
                    <Carousel {...config}>
                        {images.map((image, i) => (
                            <img
                                id={createImageNameByIndex(i)}
                                {...props(image)}
                                key={image}
                                src={i === 0 ? image : placeholder}/>)
                        )}
                    </Carousel>
                </main>
                <footer style={styles.footer}>
                    <button style={styles.button} onClick={this.onNextDestinationClick}>{buttonText}</button>
                </footer>
            </div>
        );
    }
}

export default withRouter(ResponsiveCarousel);