import React from 'react';
import { withRouter } from 'react-router';
import {getRetroScript, getCurrentHeroImage} from '../../data/states';

const styles = {
    retro: {
    },
    missionsContainer: {
        width: '100%',
        paddingBottom: '66.666%',
        position: 'relative'
    },
    missions: {
        position: 'absolute',
        display: 'flex',
        width: '100%',
        height: '100%',
        flexWrap: 'wrap'
    },
    mission: {
        width: '33.333%',
        height: '50%',
        position: 'relative'
    },
    text: {
        paddingTop: '15px',
        textAlign: 'center',
        margin: '0 auto',
        width: '310px',
        fontSize: '24px',
        lineHeight: '1.3'
    },
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
        const { missions } = this.props;

        return (
            <div style={styles.retro} className="retro">
                <header />
                <main>
                    <div style={styles.missionsContainer}>
                        <div style={styles.missions}>
                            {
                                missions.map(mission => {
                                    const imageUrl = getCurrentHeroImage(mission);
                                    const script = getRetroScript(mission);
                                    return (
                                        <img key={mission} style={styles.mission}
                                             src={imageUrl}
                                             onClick={this.onMissionClick(script)}
                                        />
                                    );
                                })
                            }
                        </div>
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
