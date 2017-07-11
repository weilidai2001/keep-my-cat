import React from 'react';
import Retro from '../../components/retro';

const RetroPage = ({ match }) => {
    const branchNumber = match.params.branch;
    const missionNumber = match.params.mission;

    const missions = ['mission_b4m3a1', 'mission_b4m2a2', 'mission_b4m2a1'];
    const props = { missions };

    return (
        <div className="page">
            <div className="page-content">
                <Retro {...props} />
            </div>
        </div>
    );
};

export default RetroPage;