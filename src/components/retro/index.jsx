import React from 'react';
import {withRouter} from 'react-router';
import {getRetroScript, getFrameHeroImage} from '../../data/states';

const styles = {
    retro: {},
    missionsContainer: {
        width: '100%',
        position: 'relative'
    },
    missions: {
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap'
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
    text: {
        paddingTop: '15px',
        textAlign: 'center',
        margin: '0 auto',
        width: '310px',
        fontSize: '16px',
        lineHeight: '1.3'
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '10px'
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
            script: ''
        };

        this.onMissionClick = this.onMissionClick.bind(this);
        this.onReplayClick = this.onReplayClick.bind(this);
    }

    onMissionClick(script) {
        return () => this.setState({script});
    }

    onReplayClick() {
        this.props.history.push('/');
    }

    render() {
        const {missions} = this.props;

        return (
            <div style={styles.retro} className="retro">
                <main>
                        <div style={styles.missions}>
                            {
                                missions.map(mission => {
                                    const imageUrl = getFrameHeroImage(mission);
                                    const script = getRetroScript(mission);
                                    return (
                                        <div key={mission} style={styles.mission}>
                                            <img src={imageUrl} style={styles.image}
                                                 onClick={this.onMissionClick(script)}/>
                                        </div>

                                    );
                                })
                            }
                        </div>
                    <div style={styles.text}>
                        {this.state.script || '(Tap on each thumbnail to review your journey)'}
                    </div>
                </main>
                <footer style={styles.footer}>
                    <button style={styles.button} onClick={this.onReplayClick}>Replay</button>
                </footer>
            </div>
        );
    }
}

export default withRouter(Retro);
