import React from 'react';
import {getRetroScript, getCurrentHeroImage} from '../../data/states';

const styles = {
    retro: {
    },
    missions: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    mission: {
        width: '33.333%',
        height: '33.333%'
    }
};

class Retro extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            script: ''
        };

        this.onMissionClick = this.onMissionClick.bind(this);
    }

    onMissionClick(script) {
        return () => this.setState({script});
    }

    render() {
        const { missions } = this.props;

        return (
            <div style={styles.retro} className="retro">
                <header />
                <main>
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
                    <div>
                        {this.state.script}
                    </div>
                </main>
            </div>
        );
    }
}

export default Retro;