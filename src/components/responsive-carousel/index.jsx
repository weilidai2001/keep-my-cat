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
                const originalSrc = el.src;
                el.src = '/white.png';
                setTimeout(() => {el.src = originalSrc;}, 100)
            }
        };

        const styles = {
            image: {
                height: '100%'
            }
        };

        return (
            <div className="responsive-carousel">
                <header/>
                <main>
                    <Carousel {...config}>
                        {images.map((image, i) => (<img style={styles.image} id={createImageNameByIndex(i)} key={image} src={image}/>))}
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