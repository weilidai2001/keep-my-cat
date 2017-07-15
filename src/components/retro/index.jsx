import React from 'react';
import {withRouter} from 'react-router';
import {getRetroScript, getFrameHeroImage, deduplicate} from '../../data/states';

const styles = {
    missions: {
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        margin: '0px auto'
    },
    mission: {
        width: '25%',
        paddingBottom: '25%',
        position: 'relative'
    },
    image: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '0px'
    },
    button: {
        fontSize: '15px',
        width: 'auto',
        padding: '5px 15px'
    }
};

class Retro extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            script: '',
            selectedImage: '',
            showLightbox: false
        };

        this.onMissionClick = this.onMissionClick.bind(this);
        this.onReplayClick = this.onReplayClick.bind(this);
    }

    onMissionClick(script, selectedImage) {
        return () => {
            this.setState({script, selectedImage, showLightbox: true})
        };
    }

    onReplayClick() {
        this.props.history.push('/');
    }

    render() {
        const {missions} = this.props;
        const deduped = deduplicate(missions);

        return (
            <div style={styles.retro} className="retro">
                <main>
                    {this.state.showLightbox && <div className="retro__mask" onClick={() => {this.setState({showLightbox: false})}}></div>}
                    {this.state.showLightbox && <div className="retro__lightbox">
                            <img className="retro__lightbox-close"
                                 onClick={() => {this.setState({showLightbox: false})}}
                                 src="/cross.png"
                            />
                            <img className="retro__lightbox-thumbnail" src={this.state.selectedImage} />
                            <div className="retro__lightbox-caption">{this.state.script}</div>
                    </div>}
                    <div style={styles.missions}>
                        {
                            deduped.map(mission => {
                                const imageUrl = getFrameHeroImage(mission);
                                const script = getRetroScript(mission);
                                return (
                                    <div key={mission} style={styles.mission}>
                                        <img src={imageUrl} style={styles.image}
                                             onClick={this.onMissionClick(script, imageUrl)}/>
                                    </div>

                                );
                            })
                        }
                    </div>
                    <div className="retro__prompt">(Tap on each thumbnail to review your journey)</div>
                </main>
                <footer style={styles.footer}>
                    <button style={styles.button} onClick={this.onReplayClick}>Replay</button>
                </footer>
            </div>
        );
    }
}

export default withRouter(Retro);
