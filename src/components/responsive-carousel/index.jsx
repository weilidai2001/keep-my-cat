import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {Carousel} from 'react-responsive-carousel';

// carousel styles
import 'react-responsive-carousel/lib/styles/carousel.css';

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
                <footer>
                    <button onClick={this.onNextDestinationClick}>{buttonText}</button>
                </footer>
            </div>
        );
    }
}

export default withRouter(ResponsiveCarousel);